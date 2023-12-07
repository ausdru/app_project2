const router = require("express").Router();
const apiRoutes = require("../controllers/api");
const homeRoutes = require("../controllers/homeRoutes");
const dashboardRoutes = require("../controllers/dashboardRoutes");
const { errorHandler, notFoundHandler } = require("../utils/helpers");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use(notFoundHandler);
router.use(errorHandler);

module.exports = router;