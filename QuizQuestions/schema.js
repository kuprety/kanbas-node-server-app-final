import mongoose from "mongoose";


const quizQuestionsSchema = new mongoose.Schema({
    quizId: String,
    type: {
        type: String,
        enum: ["multipleChoice", "trueFalse", "fillInTheBlank"],
    },
    questionTitle: String,
    question: String,
    choices: [String],
    correctAnswer: {
        type: String,
        type: Boolean,
    },
    possibleAnswers: [String],
    points: Number,
},   { collection: "quizQuestions" });
export default quizQuestionsSchema;