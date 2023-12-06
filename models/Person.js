// Teacher.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Person extends Model { }

Person.init(
    {
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        last_name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        middle_name: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        suffix: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        personal_title: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Person",
    }
);


module.exports = Person;
