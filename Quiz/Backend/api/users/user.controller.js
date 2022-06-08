const {
    create,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserEmail,
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
} = require("./user.service.js");

const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcrypt");

const {
    sign
} = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {

            console.log(results);

            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    createQuiz: (req, res) => {
        const body = req.body;
        console.log(body);
        createQuiz(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    createQuestion: (req, res) => {
        const body = req.body;
        console.log(body);
        createQuestion(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    createQC: (req, res) => { 
        const body = req.body;
        console.log(body);
        createQC(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created QC",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created QC",
                data: results
            });
        });
    },
    createCategory: (req, res) => {
        const body = req.body;
        console.log(body);
        createCategory(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created category",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created category",
                data: results
            });
        });
    },
    createUA: (req, res) => {
        const body = req.body;
        console.log(body);
        createUA(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created UA",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created UA",
                data: results
            });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getChoiceByQuestionId: (req, res) => {
        const id = req.params.id;
        getChoiceByQuestionId(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getQuestionAndQuiz: (req, res) => {
        const id = req.params.id;
        getQuestionAndQuiz(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getQuestionAndChoicesAll: (req, res) => {
        
        getQuestionAndChoicesAll( (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getQuestionById: (req, res) => {
        const id = req.params.id;
        getQuestionById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getQuizById: (req, res) => {
        const id = req.params.id;
        getQuizById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getCategoryById: (req, res) => {
        const id = req.params.id;
        getCategoryById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getQCById: (req, res) => {
        const id = req.params.id;
        getQCById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUAById: (req, res) => {
        const id = req.params.id;
        getUAById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getQuiz: (req, res) => {
        getQuiz((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getCategory: (req, res) => {
        getCategory((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getQC: (req, res) => {
        getQC((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getUA: (req, res) => {
        getUA((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getQuestion: (req, res) => {
        getQuestion((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateQuiz: (req, res) => {
        const body = req.body;
        updateQuiz(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateQuestion: (req, res) => {
        const body = req.body;
        updateQuestion(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateCategory: (req, res) => {
        const body = req.body;
        updateCategory(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateQC: (req, res) => {
        const body = req.body;
        updateQC(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteQuiz: (req, res) => {
        const data = req.body;
        deleteQuiz(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteQuestion: (req, res) => {
        const data = req.body;
        deleteQuestion(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteCategory: (req, res) => {
        const data = req.body;
        deleteCategory(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteQC: (req, res) => {
        const data = req.body;
        deleteQC(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({
                    result: results
                }, "testTest", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken,
                    data: results
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
        });
    }

}