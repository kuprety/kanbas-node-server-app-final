import "dotenv/config";

import express from 'express'
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";

import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js'
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import QuizRoutes from "./Quizzes/routes.js";
import QuizQuestionsRoutes from "./QuizQuestions/routes.js";
import cors from "cors";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);




// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(
    cors({
        credentials: true,
        // origin: "http://localhost:3000",
        origin: process.env.FRONTEND_URL

    })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));


  
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
QuizRoutes(app);
QuizQuestionsRoutes(app);
app.listen(process.env.PORT || 4000);


