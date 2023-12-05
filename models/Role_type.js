// Role_type.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { IdCDT, NameCDT } = require('./customDataTypes');

class Role_type extends Model { }

Role_type.init(
    {
        role_type_id: {
            type: IdCDT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DescriptionCDT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Role_type",
    }
);


module.exports = Role_type;
