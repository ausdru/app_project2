
const {  Model, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = require ('../config/connection')

// const app = express();
// const PORT = process.env.PORT || 3000;


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

// app.use(bodyParser.json());


// sequelize.sync()
//   .then(() => {
//     console.log('Database synced');
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });


//   app.post('/api/saveProfile', async (req, res) => {
//     try {
//       // Create a new profile in the database
//       const newProfile = await StudentProfile.create(req.body);
//       res.status(201).send('Profile saved successfully');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });


// app.use(express.static('public'));


