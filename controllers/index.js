const router = require("express").Router();
// const adminRoutes = require("./routes");
const homeRoutes = require("./routes/homeRoutes");
// const dashboardRoutes = require("./dashboardRoutes");
const { errorHandler, notFoundHandler } = require("../utils/helpers");

// router.use("/routes", adminRoutes);
router.use("/", homeRoutes);
// router.use("/dashboard", dashboardRoutes);

router.use(notFoundHandler);
router.use(errorHandler);

module.exports = router;