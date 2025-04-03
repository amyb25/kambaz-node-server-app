{/*import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignment, newAssignment];
    return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignments) => assignments.course === courseId);
}*/}
import Database from "../Database/index.js";  // Ensure you import correctly
import { v4 as uuidv4 } from "uuid";

// Ensure that Database.assignments is initialized as an array
if (!Array.isArray(Database.assignments)) {
    Database.assignments = [];  // Initialize it as an empty array if not already
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}


export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}


export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    // Use Database.assignments, not Database.assignment
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
    // Destructure assignments from Database
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}