/*INSERT INTO PERSON (`last_name`,`first_name`,
  `middle_name` ,
  `suffix`,
  `personal_title`) VALUES ("Jones", "Barnaby", "Willbur", "Jr.", 
  "Dr.");
  INSERT INTO PERSON (`last_name`,`first_name`,
  `middle_name` ,
  `suffix`,
  `personal_title`) VALUES ("Einstein", "Albert", NULL, NULL, 
  "Dr.");
  INSERT INTO PERSON (`last_name`,`first_name`,
  `middle_name` ,
  `suffix`,
  `personal_title`) VALUES ("Smith", "John", "Brad", "Sr.", 
  "Mr.");
  SELECT * FROM PERSON;
  INSERT INTO role_type (`role_type_id`, `description`) VALUES
  (1, "Teacher");
  INSERT INTO role_type (`role_type_id`, `description`) VALUES
  (2, "Parent");
  INSERT INTO role_type (`role_type_id`, `description`) VALUES
  (3, "Student");
  SELECT * FROM role_type;
INSERT INTO login
(`role_type_id`,
`party_id`,
`userName`,
`password`,
`isActive`)
VALUES
(1,1,"bjones", "detective",1);
INSERT INTO login
(`role_type_id`,
`party_id`,
`userName`,
`password`,
`isActive`)
VALUES
(1,2,"aenstein", "e=mcsquared",1);
INSERT INTO login
(`role_type_id`,
`party_id`,
`userName`,
`password`,
`isActive`)
VALUES
(2,3,"mrsmith", "smith&wesson",1);
select * from login; checkout_codeparent
INSERT INTO course
(`title`,
`description`)
VALUES
("Full Stack Coding Bootcamp","Learn verything you need to develop a web based application");
INSERT INTO course
(`title`,
`description`)
VALUES
("Full Stack Coding Bootcamp Part Time","Learn verything you need to develop a web based application");
select * from course;
INSERT INTO teacher
(`teacher_id`,
`email_address`,
`phone_number`)
VALUES
(1,"bjones@cu.edu","303-492-4431");
INSERT INTO Teacher ( `teacher_id`, `email_address`, `phone_number`) VALUES
(2, "aeinstein@harvard.edu","903-431-1874");
select * from teacher;
INSERT INTO Parent ( `parent_id`, `email_address`, `phone_number`, `checkout_code`) VALUES
(3, "jsmith@gmail.com","303-271-1935", "1234");
select * from parent;*/
  
  