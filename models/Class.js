// Class.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT } = require('./customDataTypes');
const Course = require('./Course');
const Teacher = require('./Teacher');

class Class extends Model {}

Class.init(
  {
    class_id: {
      type: IdCDT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: {
      type: IdCDT,
      allowNull: false,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    teacher_id: {
      type: IdCDT,
      allowNull: true,
      references: {
        model: Teacher,
        key: 'teacher_id',
      },
    },
    begin_dt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_dt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Class",
  }
);


module.exports = Class;
