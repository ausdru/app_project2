// Login.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT, NameCDT } = require('./customDataTypes');
const Person = require('./Person');

class Login extends Model { }

Login.init(
    {
        login_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        person_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            references: {
                model: Person,
                key: 'person_id',
              },
              },
        role_type_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
        },
        user_name: {
            type: NameCDT,
            allowNull: false,
        },
        from_date: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        thru_date: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
        },
        password: {
            type: NameCDT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Login",
    }
);


module.exports = Login;
