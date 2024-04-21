import * as dao from "./dao.js";

// let currentUser = null;
export default function QuizQuestionsRoutes(app) {
    const createQuizQuestions = async (req, res) => {
        const quizQuestions = await dao.createQuizQuestions(req.body);
        console.log(quizQuestions);
        res.json(quizQuestions);
    };
    const deleteQuizQuestions = async (req, res) => {
        const status = await dao.deleteQuizQuestions(req.params.quizQuestionsId);
        res.json(status);
    };
    const findAllQuizzesQuestions = async (req, res) => {
        const quizzesQuestions = await dao.findAllQuizzesQuestions();
        res.json(quizzesQuestions);
    };
    const findQuizQuestionsById = async (req, res) => {
        const quizQuestions = await dao.findQuizQuestionsById(req.params.quizQuestionsId);
        res.json(quizQuestions);
    };
        const updateQuizQuestions = async (req, res) => {
        const { quizQuestionsId } = req.params;
        const status = await dao.updateQuizQuestions(quizQuestionsId, req.body);
      const currentQuizQuestions = await dao.findQuizQuestionsById(quizQuestionsId);
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
    
    
    app.post("/api/quizQuestions", createQuizQuestions);
    app.get("/api/quizQuestions", findAllQuizzesQuestions);
    app.get("/api/quizQuestions/:quizQuestionsId", findQuizQuestionsById);
    app.put("/api/quizQuestions/:quizQuestionsId", updateQuizQuestions);
    app.delete("/api/quizQuestions/:quizQuestionsId", deleteQuizQuestions);
    // app.post("/api/quizzes/signup", signup);
    // app.post("/api/quizzes/signin", signin);
    // app.post("/api/quizzes/signout", signout);
    // app.post("/api/quizzes/profile", profile);
}