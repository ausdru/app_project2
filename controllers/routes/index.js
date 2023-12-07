const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const { errorHandler, notFoundHandler } = require("../../utils/helpers");

router.use("/admin", adminRoutes);


router.use(notFoundHandler);
router.use(errorHandler);

module.exports = router;