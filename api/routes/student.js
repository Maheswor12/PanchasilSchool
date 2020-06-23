const express = require("express");
const router = express();
const studentController = require("../controllers/student");
// signup router
router.post("/signup", studentController.register);
module.exports = router;
