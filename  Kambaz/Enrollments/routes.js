import * as enrollmentDao from "./dao.js"; // Import your DAO functions

export default function EnrollmentRoutes(app) {
    // Enroll a user in a course
    app.post("/api/enrollments/enroll", async (req, res) => {
        const { userId, courseId } = req.body;
        try {
            // Call the DAO function to enroll the user
            await enrollmentDao.enrollUserInCourse(userId, courseId);
            res.status(200).send({ message: "User enrolled successfully." });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    });

    // Unenroll a user from a course
    app.post("/api/enrollments/unenroll", async (req, res) => {
        const { userId, courseId } = req.body;
        try {
            // Call the DAO function to unenroll the user
            await enrollmentDao.unenrollUserFromCourse(userId, courseId);
            res.status(200).send({ message: "User unenrolled successfully." });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    });
}
