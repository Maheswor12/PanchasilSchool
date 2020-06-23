const express = require("express");
const router = express();
const staffController = require("../controllers/staff");
// signup router
router.post("/signupStaff", staffController.registerStaff);
module.exports = router;
