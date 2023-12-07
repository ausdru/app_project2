// User.js
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    person_party_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    role_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
   
  },
  {
    hooks: {
      async beforeCreate(newUserPwData) {
        try {
          newUserPwData.username = newUserPwData.username.toLowerCase();
          newUserPwData.password = await bcrypt.hash(
            newUserPwData.password,
            10
          );
          return newUserPwData;
        } catch (error) {
          throw new Error("Error hashing password");
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);
module.exports = User;
