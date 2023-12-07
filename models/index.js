const StudentProfile = require("./studentProfile")
const Course = require("./Course");
const Class = require("./Class");
const Teacher = require("./Teacher");
const Parent = require("./Parent");
const Person = require("./Person");
const Role_type = require("./Role_type");
const User = require("./User");

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
Parent.belongsTo(Person, {
  foreignKey: 'parent_id'
});
Person.hasMany(Parent, {
  foreignKey: 'person_id'
});
Teacher.belongsTo(Class, {
  foreignKey: 'teacher_id'
});
Class.hasMany(Teacher, {
  foreignKey: 'person_id'
});
User.belongsTo(Person, {
  foreignKey: 'person_party_id'
});
Person.hasMany(User, {
  foreignKey: 'person_id'
});
User.belongsTo(Role_type, {
  foreignKey: 'role_type_id'
});
Role_type.hasMany(User, {
  foreignKey: 'role_type_id'
});

module.exports = {Course, Class, Teacher, Person, Parent, Role_type, User, StudentProfile, Role_type
};
  