
const {  Model, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = require ('../config/connection')

class StudentProfile extends Model {}


 StudentProfile.init ( {
  studentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentBirthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyContact1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyPhone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyContact2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyPhone2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickupPerson1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickupPerson2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize,
  modelName: "StudentProfile"
}
);



module.exports = StudentProfile;

