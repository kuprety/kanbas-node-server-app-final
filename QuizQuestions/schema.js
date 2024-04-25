import mongoose, { Schema } from "mongoose";


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
        content: Schema.Types.Mixed
        // type: Boolean,
    },
    possibleAnswers: [String],
    points: Number,
},   { collection: "quizQuestions" });
export default quizQuestionsSchema;