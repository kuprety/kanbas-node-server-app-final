import model from "./model.js";
//export const findUserByCredentials = (username, password) => model.findOne({ username, password });



export const createQuizQuestions = (quizQuestions) => {
  delete quizQuestions._id
  return model.create(quizQuestions);
}

  
export const findAllQuizzesQuestions = () => model.find();
export const findQuizQuestionsById = (quizQuestionsId) => model.findById(quizQuestionsId);
export const findQuizQuestionsByTitle = (title) => model.findOne({ title: title });
export const updateQuizQuestions = (quizQuestionsId, quizQuestions) => model.updateOne({ _id: quizQuestionsId }, { $set: quizQuestions });
export const deleteQuizQuestions = (quizQuestionsId) => model.deleteOne({ _id: quizQuestionsId });