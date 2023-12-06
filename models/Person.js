// Teacher.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT, NameCDT } = require('./customDataTypes');

class Person extends Model { }

Person.init(
    {
        person_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        last_name: {
            type: NameCDT,
            allowNull: false,
        },
        first_name: {
            type: NameCDT,
            allowNull: false,
        },
        middle_name: {
            type: NameCDT,
            allowNull: true,
        },
        suffix: {
            type: NameCDT,
            allowNull: true,
        },
        personal_title: {
            type: NameCDT,
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
