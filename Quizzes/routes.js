import * as dao from "./dao.js";

// let currentUser = null;
export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };
    const findQuizrById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };
        const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
      const currentQuiz = await dao.findQuizById(quizId);
        res.json(status);
    };


    app.post("/api/quizzes", createQuiz);
    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    // app.post("/api/quizzes/signup", signup);
    // app.post("/api/quizzes/signin", signin);
    // app.post("/api/quizzes/signout", signout);
    // app.post("/api/quizzes/profile", profile);
}