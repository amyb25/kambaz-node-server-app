import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from "cors";
import UserRoutes from './ Kambaz/Users/routes.js';
import "dotenv/config";
import session from "express-session";
import CourseRoutes from './ Kambaz/Courses/routes.js';
import ModuleRoutes from './ Kambaz/Modules/routes.js';
import AssignmentRoutes from './ Kambaz/Assignments/routes.js';
import EnrollmentRoutes from './ Kambaz/Enrollments/routes.js';

const app = express();

// Middleware to parse URL-encoded form data (useful for forms with `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
}
));

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  
app.use(
    session(sessionOptions)
);

// Middleware to parse JSON request bodies (only need this once)
app.use(express.json());

// Register routes after middleware
Hello(app);
Lab5(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
app.listen(process.env.PORT || 4000)
