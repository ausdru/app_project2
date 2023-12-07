const router = require("express").Router();
const userRoutes = require("./userRoutes");
const { errorHandler, notFoundHandler } = require("../../utils/helpers");
const profileRoutes = require("./profileRoutes");



router.use("/users", userRoutes);
router.use("/saveprofile", profileRoutes);
// router.use("/posts", postRoutes);


router.use(notFoundHandler);
router.use(errorHandler);

module.exports = router;