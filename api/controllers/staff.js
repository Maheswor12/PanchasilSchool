const bcrypt = require("bcryptjs");
const registerUser = require("../model/staff");

async function registerStaff(req, res) {
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
        citizenshipno: req.body.citizenshipno,
        type: req.body.type,
        amount: req.body.amount,
        password: hashedPassword,
        image: req.file.filename,
      });
      res.json({
        status: true,
        message: "sraff Register Sucessfull",
        code: 201,
      });
    }
  } catch (error) {
    // console.log(error);
    res.json({
      status: false,
      message: "Fail to register staff",
      code: 400,
    });
  }
}

module.exports = {
  registerStaff,
};
