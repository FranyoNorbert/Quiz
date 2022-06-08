const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        let queryString = `INSERT INTO user 
        (firstName,lastName,gender,email,password,phoneNumber,access) 
        VALUES (?,?,?,?,?,?,?);
        `
        // let params = Object.values(data);
        params = [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.phoneNumber,
            data.access
        ]
        // console.log("adat:",params);
        // return;
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createQuiz: (data, callBack) => {
        let queryString = `INSERT INTO quiz (quizName,Description,created,CategoryId) 
        VALUES (?,?,Now(),?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createQuestion: (data, callBack) => {
        let queryString = `INSERT INTO question (question,categoryId,quizId) 
        VALUES (?,(SELECT id FROM category WHERE id =?),(SELECT id FROM quiz WHERE id =?));
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createCategory: (data, callBack) => {
        let queryString = `INSERT INTO category (categoryName) values (?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createQC: (data, callBack) => {
        let queryString = `INSERT INTO questionchoice (choice,questionId,points) 
        VALUES (?,(SELECT id FROM question WHERE id = ?),?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createUA: (data, callBack) => {
        let queryString = `INSERT INTO useranswers (userId,questionId,questionChoiceId,quizId) 
        VALUES 
        ((SELECT id FROM user WHERE id = ?),
        (SELECT id FROM question WHERE id = ?),
        (SELECT id FROM questionchoice WHERE id = ?),
        (SELECT id FROM quiz WHERE id = ?));
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserEmail: (email, callBack) => {
        let queryString = `select * from user where email = ?`;
        let params = [email];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    getUsers: callBack => {
        const queryString = `select * from user`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getQuiz: callBack => {
        const queryString = `select DISTINCT q.id, q.quizName,q.Description,c.categoryName,q.created from quiz q 
        INNER JOIN category c ON c.id = q.categoryId; `;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getQuestion: callBack => {
        const queryString = `select * from question`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getCategory: callBack => {
        const queryString = `select * from category`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getQC: callBack => {
        const queryString = `select * from questionchoice`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUA: callBack => {
        const queryString = `select * from useranswers`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserId: (id, callBack) => {
        const queryString = `select * from user where id=?`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getQuestionAndQuiz: (id, callBack) => {
        const queryString = `SELECT 
        qz.id quizId,
         q.id questionId,
          q.question,
          qz.quizName,
          qz.Description,
          qz.created,
          qz.categoryId FROM question q
        INNER JOIN quiz qz on qz.id = q.quizId
        WHERE qz.id = ?;`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getQuestionAndChoicesAll: (callBack) => {
        const queryString = `SELECT qz.id quizId,
        q.id questionId,
        qc.id questionChoiceId,
        q.question,qc.choice,
        qc.points 
        FROM question q
        INNER JOIN questionchoice qc ON q.id = qc.questionId
        INNER JOIN quiz qz ON qz.id = q.quizId`;

        params = [];
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getQuizById: (id, callBack) => {
        const queryString = `select * from quiz where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getQuestionById: (id, callBack) => {
        const queryString = `select question, quizId from question where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getCategoryById: (id, callBack) => {
        const queryString = `select * from category where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getChoiceByQuestionId: (id, callBack) => {
        const queryString = `SELECT * FROM questionchoice WHERE questionId = ?;`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getQCById: (id, callBack) => {
        const queryString = `select * from questionchoice where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getUAById: (id, callBack) => {
        const queryString = `select * from useranswers where userId=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    updateUser: (data, callBack) => {
        const queryString = `update user set 
                    firstName=?, lastName=?, gender=?, email=?, password=?, phoneNumber=?
                    where id=?`;
        const params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateQuiz: (data, callBack) => {
        const queryString = `UPDATE quiz 
        SET quizName=?, Description=?, created=Now() where id= ?;`;
        // const params = Object.values(data);
        const params = [
            data.quizName,
            data.Description,
            data.id
        ]
        console.log("Update car:", params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateQuestion: (data, callBack) => {
        const queryString = `UPDATE question SET question=?, categoryId=?, quizId=? WHERE id = ?;
                `;
        // const params = Object.values(data);
        params = [
            data.question,
            data.categoryId,
            data.quizId,
            data.id
        ]
        pool.query(queryString, params, (error, results, fields) => {
            // console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateCategory: (data, callBack) => {
        const queryString = `UPDATE category 
        SET categoryName=? where id= ?;`;
        // const params = Object.values(data);
        const params = [
            data.categoryName,
            data.id
        ]
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateQC: (data, callBack) => {
        const queryString = `UPDATE questionchoice 
        SET choice=?,questionId=?, points=? where id= ?;`;
        // const params = Object.values(data);
        const params = [
            data.choice,
            data.questionId,
            data.points,
            data.id
        ]
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteUser: (data, callBack) => {
        const queryString = `delete from user where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteQuiz: (data, callBack) => {
        const queryString = `delete from quiz where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteQuestion: (data, callBack) => {
        const queryString = `delete from question where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteCategory: (data, callBack) => {
        const queryString = `delete from category where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteQC: (data, callBack) => {
        const queryString = `delete from questionchoice where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    }
};