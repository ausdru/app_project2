const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Course extends Model {}

Course.init(
  {
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     },
    title: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    description: {
      type: DataTypes.STRING,
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