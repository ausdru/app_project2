// Parent.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Person = require('./Person');

class Parent extends Model { }

Parent.init(
    {
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            references: {
                model: Person,
                key: 'person_id',
              },
                },
        email_address: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        checkout_code: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Parent",
    }
);


module.exports = Parent;
