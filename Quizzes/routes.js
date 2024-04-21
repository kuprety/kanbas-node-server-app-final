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
    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };
        const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
      const currentQuiz = await dao.findQuizById(quizId);
        res.json(status);
    };

    // const signup = async (req, res) => {
    //     const user = await dao.findUserByUsername(req.body.username);
    //     if (user) {
    //         res.status(400).json(
    //             { message: "Username already taken" });
    //     }
    //     const currentUser = await dao.createUser(req.body);
    //     req.session["currentUser"] = currentUser;
    //     res.json(currentUser);
    // };

    // const signin = async (req, res) => {
    //     const { username, password } = req.body;
    //     const currentUser = await dao.findUserByCredentials(username, password);
    //     if (currentUser) {
    //       req.session["currentUser"] = currentUser;
    //       res.json(currentUser);
    //     } else {
    //       res.sendStatus(401);
    //     }
    //   };
    
    //   const signout = (req, res) => {
    //     req.session.destroy();
    //     res.sendStatus(200);
    //   };
    
    
    // app.post("/api/users/signout", signout);
    // const profile = (req, res) => {
    //     const currentUser = req.session["currentUser"];
    //     if (!currentUser) {
    //       res.sendStatus(401);
    //       return;
    //     }
    //     res.json(currentUser);
    //   };
    
    
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

