// const User = require("./User");
// const Post = require("./Post");
const Course = require("./Course");
const Class = require("./Class");
const Teacher = require("./Teacher");
const Person = require("./Person");
const Login = require("./Login");

// User.hasMany(Post, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Post.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
//   onDelete: "CASCADE",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
// });
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

module.exports = {
  // User,
  // Post,
  Course,
  Class,
  Person,
  Teacher,
  Login,

};