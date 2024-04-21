import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    _id: "",
    name: String,
    course: String,
    title: String,
    description: String,
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
    },
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
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
