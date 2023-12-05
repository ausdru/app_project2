const StudentProfile = require("./studentProfile")
const Course = require("./Course");
const Class = require("./Class");
const Teacher = require("./Teacher");
const Person = require("./Person");
const Login = require("./Login");

Class.belongsTo(Course, {
  foreignKey: 'course_id'
});
Course.hasMany(Class, {
  foreignKey: 'course_id'
});
Teacher.belongsTo(Person, {
  foreignKey: 'teacher_id'
});
Person.hasMany(Teacher, {
  foreignKey: 'person_id'
});
Login.belongsTo(Person, {
  foreignKey: 'person_id'
});
Person.hasMany(Login, {
  foreignKey: 'person_id'
});

module.exports = {User,
  Post,
  Comment,
};
  