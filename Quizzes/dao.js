import model from "./model.js";
//export const findUserByCredentials = (username, password) => model.findOne({ username, password });



export const createQuiz = (quiz) => {
  delete quiz._id
  return model.create(quiz);
}

  
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);
export const findQuizByTitle = (title) => model.findOne({ title: title });
export const updateQuiz = (quizId, quiz) => model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteUser = (quizId) => model.deleteOne({ _id: quizId });


