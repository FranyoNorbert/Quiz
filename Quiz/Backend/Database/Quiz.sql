SELECT * FROM useranswers;

SELECT * FROM question; /* Need LookOver but Done */
SELECT * FROM user; /* Backend Done */
SELECT * FROM category; /* Done */
SELECT * FROM quiz; /* Done */
SELECT * FROM questionchoice; /* Done */

/*USER*/
INSERT INTO user (firstName,lastName,gender,email,password,phoneNumber,access) VALUES ();

/* CATEGORY */
INSERT INTO category (categoryName) values ('Test');

/* QUIZ */
INSERT INTO quiz (quizName,Description,created) VALUES ('BasicMath','Eazy math questions.',Now());
/*Quiz Update */
UPDATE quiz SET quizName='UpdatedQuiz', Description='ThisWasUpdated', created=Now() where id= 1;

/* QUESTION */
INSERT INTO question (id,question,categoryId,quizId) 
VALUES (1, '1+1=?',(SELECT id FROM category WHERE id =1),(SELECT id FROM quiz WHERE id =1));

/* QUESTIONCHOICE */
INSERT INTO questionchoice (choice,questionId,points) VALUES ('2',(SELECT id FROM question WHERE id = 1),3);


UPDATE questionchoice SET choice='Test',questionId='3', points='3' where id= 10;




SELECT * FROM useranswers WHERE userId


UPDATE question SET question=?, categoryId=?, quizId=? WHERE id = ?;

DELETE FROM question WHERE id =1;


/* UserAnswers */

INSERT INTO useranswers (userId,questionId,questionChoiceId,quizId) VALUES ((SELECT id FROM user WHERE id = 2),(SELECT id FROM question WHERE id = 1),(SELECT id FROM questionchoice WHERE id = 8),(SELECT id FROM quiz WHERE id = 1));
