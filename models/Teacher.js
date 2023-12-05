// Teacher.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT, longVarchar, shortVarchar } = require('./customDataTypes');

class Teacher extends Model { }

Teacher.init(
    {
        teacher_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email_address: {
            type: longVarchar,
            allowNull: true,
        },
        phone_number: {
            type: shortVarchar,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Teacher",
    }
);


module.exports = Teacher;