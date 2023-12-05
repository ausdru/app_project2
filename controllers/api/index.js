const router = require("express").Router();
const userRoutes = require("./userRoutes");
const { errorHandler, notFoundHandler } = require("../../utils/helpers");

router.use("/users", userRoutes);


router.use(notFoundHandler);
router.use(errorHandler);

module.exports = router;