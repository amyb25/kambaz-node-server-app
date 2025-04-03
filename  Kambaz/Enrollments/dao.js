import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

// Unenroll user from a course
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;

  // Find the enrollment to remove
  const enrollmentIndex = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );

  if (enrollmentIndex === -1) {
    throw new Error("User is not enrolled in this course.");
  }

  // Remove the enrollment
  enrollments.splice(enrollmentIndex, 1);
}