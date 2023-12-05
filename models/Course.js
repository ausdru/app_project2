const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { DescriptionCDT, IdCDT, NameCDT } = require('./customDataTypes');

const Class = require('./Class'); // Import the Class model
class Course extends Model {}

Course.init(
  {
    course_id: {
      type: IdCDT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     },
    title: {
      type: NameCDT,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    description: {
      type: DescriptionCDT,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
          },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Course",
  }
);

module.exports = Course;