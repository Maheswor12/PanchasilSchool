const bcrypt = require("bcryptjs");
const registerUser = require("../model/student");

async function register(req, res) {
  console.log(req.body);
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const result = await registerUser.findOne({
      where: { email: req.body.email },
    });
    //console.log(result);
    if (result) {
      res.json({
        status: false,
        message: "Email already exit",
        code: "409",
      });
    } else {
      registerUser.create({
        fullname: req.body.fullname,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email,
        gender: req.body.gender,
        attendence: req.body.attendence,
        parent_info: req.body.parent_info,
        password: hashedPassword,
        image: req.file.filename,
      });
      res.json({
        status: true,
        message: "student Register Sucessfull",
        code: 201,
      });
    }
  } catch (error) {
    // console.log(error);
    res.json({
      status: false,
      message: "Fail to register student",
      code: 400,
    });
  }
}

module.exports = {
  register,
};
