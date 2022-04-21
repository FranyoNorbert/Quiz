﻿CREATE DATABASE quiz
	CHARACTER SET utf8
	COLLATE utf8_general_ci;

CREATE TABLE quiz.useranswers (
  userId INT(11) DEFAULT NULL,
  questionId INT(11) DEFAULT NULL,
  questionChoiceId INT(11) DEFAULT NULL,
  quizId INT(11) DEFAULT NULL
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

ALTER TABLE quiz.useranswers 
  ADD CONSTRAINT FK_useranswers_answerchoices_id FOREIGN KEY (questionChoiceId)
    REFERENCES quiz.answerchoices(id);

ALTER TABLE quiz.useranswers 
  ADD CONSTRAINT FK_useranswers_question_id FOREIGN KEY (questionId)
    REFERENCES quiz.question(id);

ALTER TABLE quiz.useranswers 
  ADD CONSTRAINT FK_useranswers_quiz_id FOREIGN KEY (quizId)
    REFERENCES quiz.quiz(id);

ALTER TABLE quiz.useranswers 
  ADD CONSTRAINT FK_useranswers_user_id FOREIGN KEY (userId)
    REFERENCES quiz.user(id);

CREATE TABLE quiz.user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) DEFAULT NULL,
  lastName VARCHAR(255) DEFAULT NULL,
  gender VARCHAR(255) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  password VARCHAR(255) DEFAULT NULL,
  phoneNumber VARCHAR(255) DEFAULT NULL,
  access INT(11) DEFAULT NULL,
  logedIn INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

CREATE TABLE quiz.quiz (
  id INT(11) NOT NULL AUTO_INCREMENT,
  quizName VARCHAR(255) DEFAULT NULL,
  Description VARCHAR(255) DEFAULT NULL,
  created DATETIME DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

CREATE TABLE quiz.question (
  id INT(11) NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) DEFAULT NULL,
  categoryId INT(11) DEFAULT NULL,
  quizId INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

ALTER TABLE quiz.question 
  ADD CONSTRAINT FK_question_category_id FOREIGN KEY (categoryId)
    REFERENCES quiz.category(id);

CREATE TABLE quiz.category (
  id INT(11) NOT NULL AUTO_INCREMENT,
  categoryName VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

CREATE TABLE quiz.answerchoices (
  id INT(11) NOT NULL AUTO_INCREMENT,
  choices VARCHAR(255) DEFAULT NULL,
  questionId INT(11) DEFAULT NULL,
  rightAnswer VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

ALTER TABLE quiz.answerchoices 
  ADD CONSTRAINT FK_answerchoices_question_id FOREIGN KEY (questionId)
    REFERENCES quiz.question(id);