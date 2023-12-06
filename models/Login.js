// Login.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT, NameCDT } = require('./customDataTypes');
const Person = require('./Person');
const Role_type = require('./Role_type');

class Login extends Model { }

Login.init(
    {
        login_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        role_type_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            references: {
                model: Role_type,
                key: 'role_type_id',
              },
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
        user_name: {
            type: NameCDT,
            allowNull: false,
        },
        password: {
            type: NameCDT,
            allowNull: false,
        },
       is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }    
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
