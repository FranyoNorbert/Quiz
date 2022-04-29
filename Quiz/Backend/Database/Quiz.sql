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


/*Test adatok*/

/*Category Feltöltése*/
INSERT INTO category (id,categoryName) VALUES 
(1,'Art'),
(2,'Business'),
(3,'Computer science'),
(4,'English Language Arts'),
(5,'Finance'),
(6,'General knowledge'),
(7,'Geography'),
(8,'History'),
(9,'Languages'),
(10,'Law'),
(11,'Math'),
(12,'Music'),
(13,'Science'),
(14,'Seasonal'),
(15,'Social Emotional Learning'),
(16,'Social studies'),
(17,'Trivia');


/*Quiz Feltöltése*/
INSERT INTO quiz
(id,quizName,Description,created,categoryId)
VALUES 
(1,'Famous Art!','Can you name all these famous artworks?',NOW(),1),
(2,'UNDERSTANDING BALANCE IN ART','Can you identify the balance is these pictures?',NOW(),1),
(3,'Art 101: Elements of Art','Elements of Art',NOW(),1),
(4,'Business','Business',NOW(),2),
(5,'Introduction to Business Management','This is the introduction chapter to test how much you know about management. Lets begin...',NOW(),2),
(6,'C1 Vocabulary: Business English','Business Vocabulary',NOW(),2),
(7,'KS4 End of Term Computer Science Quiz','A series of questions from all over the realm of Computer Science, some will be guesses for your students but all will be fun!',NOW(),3),
(8,'Computer Science Trivia','Time to have fun with this quiz about computer trivia. Answer these computer science trivia questions and become the master of computers!',NOW(),3),
(9,'Problem Solving Process','Based on the Unit 1 curriculum from Code.org, this quiz reviews the problem solving process concepts in Chapter 1.',NOW(),3),
(10,'English Language Arts Review- Grammar','Used for end of year review',NOW(),4),
(11,'4th Grade English/Language Arts','fourthgrade English',NOW(),4),
(12,'2nd Grade English Language Arts','Flex Day 1',NOW(),4),
(13,'Personal Finance Basics (Middle School)','Learn the basics of personal finance for middle school and junior high school students.',NOW(),5),
(14,'Real Estate Finance Study Guide','This is a study guide for my students enrolled in the 30 classroom hour pre-license finance course',NOW(),5),
(15,'Finance Business Studies HSC','Business Studies',NOW(),5),
(16,'The United Nations (UN)','A quiz on the #history and purpose of the United Nations in celebration of United Nations Day.',NOW(),6),
(17,'U.S. Government and Politics','A socialstudies quiz about unitedstates politics and government.',NOW(),6),
(18,'World War I: Overview','A kahoot about the major events of World War I.',NOW(),6),
(19,'Geography Review','A geography review of major world countries and continents and oceans.',NOW(),7),
(20,'European Geography','european geography',NOW(),7),
(21,'Nature Geography','geography in the forest, on land, and in water, 24 questions about nature, environment, region (Animals, Mountains, Forests, Deserts, etc.)',NOW(),7),
(22,'Teens Who Made History','A fun history Quiz about teenagers who changed the world.',NOW(),8),
(23,'World History: The Renaissance','How much do you know about the Renaissance? Take this quiz to find out!',NOW(),8),
(24,'History of Halloween','A history Halloween Quiz to see what students know.',NOW(),8),
(25,'European Day of Languages Challenge','EDL',NOW(),9),
(26,'World Languages Orientation Day','trivia',NOW(),9),
(27,'I love you in different languages.','Do you know in which language "I love you �" is said like this? Test your knowledge with this fun language quiz',NOW(),9),
(28,'Physics: Newtons 3rd Law','This quiz reviews Newtons 3rd Law of Motion and provides several examples to help understand the relationship between two',NOW(),10),
(29,'Ethics in Law Enforcement','Ethics in Law Enforcement',NOW(),10),
(30,'Contract Law Test Review','Law Test',NOW(),10),
(31,'Ratios, Proportions, Solving Proportions (MATH)','Use ratio and rate reasoning to solve real-world and mathematical problems',NOW(),11),
(32,'Math Order of Operations Back-to-School','A back-to-school refresher!',NOW(),11),
(33,'Algebra Rearrange Formulas (MATH)','Rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations.',NOW(),11),
(34,'Intro to Instrumental','An introduction to instrumental through performance and music techniques from renowned Disney entertainment!',NOW(),12),
(35,'Music 2021','Music 2021',NOW(),12),
(36,'Holiday Music Trivia','Play this kahoot to see how much you know about holiday songs!',NOW(),12),
(37,'Superbugs!','Superbugs!',NOW(),13),
(38,'Regeneration','Regeneration',NOW(),13),
(39,'Earth & Space Science with Star Wars','This Quiz explores various Earth and space science trivia using comparisons from StarWars.',NOW(),13),
(40,'Seasonal produce','Show the class how much you know!',NOW(),14),
(41,'Seasonal Changes','Seasonal Changes',NOW(),14),
(42,'Climate Change','Use this quiz to test your knowledge on climatechange.',NOW(),14),
(43,'Social-Emotional Learning','This quiz introduces the five key areas of social-emotional learning and ways to practice each one! ',NOW(),15),
(44,'Find Your Spark with Pixars Soul','New souls discover their personalities at the You Seminar in Pixars OSCAR® Winner Soul. Explore what makes everyone unique in this special quiz. ',NOW(),15),
(45,'Always Let Your Conscience Be Your Guide!','Doing what is right isnt always easy, but when you let your conscience be your guide, it can help you make the good decisions! Learn how to make good decisions with Pinocchio. ',NOW(),15),
(46,'Empathy','Empathy - This kahoot helps children ages 6+ practice sharing and relating to others feelings by connecting over shared experiences.',NOW(),16),
(47,'Elections in America','Covering the serious business of elections in America in a not-so-serious way.',NOW(),16),
(48,'Critical Thinking','Critical Thinking - This kahoot helps children ages 6+ understand the difference between assumptions and facts and the importance of asking questions. ',NOW(),16),
(49,'General Trivia','Hey, trivia master! Surprise your friends with this quiz. Who will hit this one out of the park?',NOW(),17),
(50,'Seven Wonders of the Ancient World','A geography quiz about the Seven Wonders of the Ancient World. See how much you know about these ancient buildings and monuments!',NOW(),17),
(51,'Famous European artists and their paintings','Do you like art? Do you want to learn more about some of the famous painters in history? Then this inspiring quiz is for you!',NOW(),17);


/*Question Feltöltése*/
(,'',),
INSERT INTO question
(id,question,quizId)
VALUES
(1,'Name the artwork!',1),
(2,'Name the artwork!',1),
(3,'Name the artwork!',1),
(4,'Name the artwork!',1),
(5,'Name the artwork!',1),
(6,'Name the artwork!',1),
(7,'Name the artwork!',1),
(8,'Name the artwork!',1),
(9,'Look at the picture and identify the type of ballance.',2),
(10,'Look at the picture and identify the type of ballance.',2),
(11,'Look at the picture and identify the type of ballance.',2),
(12,'Look at the picture and identify the type of ballance.',2),
(13,'Look at the picture and identify the type of ballance.',2),
(14,'Look at the picture and identify the type of ballance.',2),
(15,'Look at the picture and identify the type of ballance.',2),
(16,'Look at the picture and identify the type of ballance.',2),
(17,'Look at the picture and identify the type of ballance.',2),
(18,'Look at the picture and identify the type of ballance.',2),
(19,'Look at the picture and identify the type of ballance.',2),
(20,'Look at the picture and identify the type of ballance.',2),
(21,'Look at the picture and identify the type of ballance.',2),
(22,'Look at the picture and identify the type of ballance.',2),
(23,'Look at the picture and identify the type of ballance.',2),
(24,'Look at the picture and identify the type of ballance.',2),
(25,'Look at the picture and identify the type of ballance.',2),
(26,'Look at the picture and identify the type of ballance.',2),
(27,'Look at the picture and identify the type of ballance.',2),
(28,'Look at the picture and identify the type of ballance.',2),
(29,'Look at the picture and identify the type of ballance.',2),
(30,'Look at the picture and identify the type of ballance.',2),
(31,'Look at the picture and identify the type of ballance.',2),
(32,'Look at the picture and identify the type of ballance.',2),
(33,'Look at the picture and identify the type of ballance.',2),
(34,'Look at the picture and identify the type of ballance.',2),
(35,'Look at the picture and identify the type of ballance.',2),
(36,'Look at the picture and identify the type of ballance.',2),
(37,'Look at the picture and identify the type of ballance.',2),
(38,'Look at the picture and identify the type of ballance.',2),
(39,'Another name of this Element of Art is hue:',3),
(40,'This Element of Art is a path of a point moving throught space.',3),
(41,'This element of Art implies spatial form and is usually perceived as two-dimensional (flat)',3),
(42,'This has depth,lenght,and width and resides in space.It is perceived as three-dimensinal',3),
(43,'An enclosed space,the boundaries of which are defined by other elements of art.',3),
(44,'These all come from the three primaries and black and white.',3),
(45,'This refers to relative lightness & darkness & is perceived in varying levels of cantrast.',3),
(46,'These are limited to two dimensions: length and width',3),
(47,'This refers to the area in which art is organized.',3),
(48,'This represents a value of space or a 3-dimensional object on a flat surface.',3),
(49,'This refers to tactile qualities of a surface or visual representation of surface qualities.',3),
(50,'These shapes have natural, less well-defined edges (think: an amoeba, or a cloud)',3),
(51,'These shapes have the clear edges one achives when using tools to create them.',3),
(52,'This Element of Art has three proerties - hue,value,and intensity.',3),
(53,'The three primary colors are:',3),
(54,'Which statement is true?',4),
(55,'Which of the following is NOT a commodity:',4),
(56,'The prics of petrol rises, which statement best descripes the effect on a small delivery firm:',4),
(57,'The price of chocolate falls. Which statement best describes the reason why this has happened.',4),
(58,'If intrest rates fall:',4),
(59,'If the intrest rate rises:',4),
(60,'Which statement best describes an export for a UK firm:',4),
(61,'If £1 = $1.80, then a £1,000 order of British cheese will sell in the USA for:',4),
(62,'If £1 = $1.50, then a $450 weekend break in Wen York will cost a UK customer:',4),
(63,'If the £ is weaker:',4),
(64,'If the £ becomes stronger:',4),
(65,'If firms can correctly forecast future economic conditions:',4),
(66,'What are the factors of production?',4),
(67,'What is the basic economic problem?',4),
(68,'Which is NOT a bisiness objective?',4),
(69,'Value added is...',4),
(70,'What does FIFO stand for?',4),
(71,'Which country is the biggest producer of natural gas?',4),
(72,'What is the larges stock exchange in the world in therms of market capitalisation?',4),
(73,'What county had the highest crude oil prouction in 2014?',4),
(74,'Which nation is not a member of the Asia-Pacific Economic Cooperation (APEC)?',4),
(75,'Which of the following countries is not one of three larges trade partners of the USA?',4),
(76,'What year did NAFTA enter into force?',4),
(77,'Which of the following is the most expensive currency?',4),
(78,'Which city has the highest cost of living?',4),
(79,'Management: A process of using organisational resources to achive organisations goals by Planning, Organising __ & __',5),
(80,'____ was the first to describe the four managerial functions in 1800s.',5),
(81,'Leadership involves a maneger using power, infuence, vision, persuasion, and communication skills.',5),
(82,'___ is to eliminate jobs at all levels of management.',5),
(83,'___ is expanding the tasks and responsibilities of the employees.',5),
(84,'There are 3 broad categories of Roles are - Interpersonal Informational & ____.',5),
(85,'Associated with the tasks needed to obtain and transmit information for manegment of the organisation.',5),
(86,'The manager trasmits information to influence attitudes and behaviour of employees.',5),
(87,'The Three skils that manegers need to perform effectively are Conceptual, Human & ___ Skills',5),
(88,'___ seeks to negotiate solutions between manegers, unions, customers and of shareholders.',5),



