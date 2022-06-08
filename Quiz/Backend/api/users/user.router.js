const {
    createUser,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    login,
    getQuiz,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuestion,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    createCategory,
    getCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    createQC,
    getQC,
    getQCById,
    updateQC,
    deleteQC,
    createUA,
    getUA,
    getUAById,
    getQuestionAndQuiz,
    getQuestionAndChoicesAll,
    getChoiceByQuestionId
} = require("./user.controller.js")
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");
//User
router.post("/users/register", checkToken, createUser);
router.get("/users/", checkToken, getUsers);
router.get("/users/:id", checkToken, getUserByUserId);
router.put("/users/", checkToken, updateUsers);
router.delete("/users/", checkToken, deleteUser);
router.post("/users/login", login)

//Quiz 
router.post("/quiz", checkToken, createQuiz);
router.get("/quiz", checkToken, getQuiz);
router.get("/quiz/:id", checkToken, getQuizById);
router.put("/quiz/", checkToken, updateQuiz);
router.delete("/quiz/", checkToken, deleteQuiz);

//Questions 
router.post("/question", checkToken, createQuestion);
router.get("/question", checkToken, getQuestion);
router.get("/question/:id", checkToken, getQuestionById);
router.put("/question/", checkToken, updateQuestion); 
router.delete("/question/", checkToken, deleteQuestion);

//Category
router.post("/category",checkToken,createCategory);
router.get("/category",checkToken, getCategory);
router.get("/category/:id",checkToken, getCategoryById);
router.put("/category",checkToken, updateCategory);
router.delete("/category",checkToken, deleteCategory);


// //QuestionChoice
router.post("/QuestionChoice",checkToken,createQC);
router.get("/QuestionChoice",checkToken,getQC);
router.get("/QuestionChoice/:id",checkToken,getQCById);
router.put("/QuestionChoice/",checkToken,updateQC);
router.delete("/QuestionChoice/",checkToken,deleteQC);


// // UserAnswers (Not Finished)
router.post("/UserAnswers",checkToken,createUA);
router.get("/UserAnswers",checkToken,getUA);
router.get("/UserAnswers/:id",checkToken,getUAById);

router.get("/getQuestionAndQuiz/:id",checkToken,getQuestionAndQuiz);
router.get("/getQuestionAndChoices",checkToken,getQuestionAndChoicesAll);

router.get("/getChoiceByQuestionId/:id",checkToken,getChoiceByQuestionId)
module.exports = router;