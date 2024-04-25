import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    published: Boolean,
    name: String, 
    course: String,
    title: String,
    description: String,
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"], default: "Graded Quiz"
    },
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"], default: "Quizzes"
    },
    shuffleAnswers: Boolean,
    timeLimit: Number, // in minutes
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
},   { collection: "quizzes" });
export default quizSchema;
