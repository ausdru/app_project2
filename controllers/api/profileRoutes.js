const router = require("express").Router();
const { errorHandler, notFoundHandler } = require("../../utils/helpers");
const { StudentProfile } = require("../../models");



router.post('/', async (req, res) => {
        console.log(req.body)
    try {
          // Create a new profile in the database
          const newProfile = await StudentProfile.create(req.body);
          res.status(201).send('Profile saved successfully');
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      });


      

    


module.exports = router;