import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.filter((e) => e.course !== null).map((enrollment) => ({...enrollment.course._doc, enrolled: true}));
 }
 
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.filter((e) => e.user !== null).map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: (new Date()).getTime()+'' };
  return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
