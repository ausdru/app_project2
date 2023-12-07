// Teacher.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Person = require('./Person');

class Teacher extends Model { }

Teacher.init(
    {
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: Person,
                key: 'person_id',
              },
                },
        email_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING(40),
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
