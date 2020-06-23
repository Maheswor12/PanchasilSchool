process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
const staff = require("../api/model/staff");
const student = require("../api/model/student");

const should = chai.should();
chai.use(chaiHttp);

describe("/POST student", () => {
  it("it should register the student info", (done) => {
    const student = {
      fullname: "Raman Phadera",
      address: "Kathmandu",
      number: "9864535353",
      email: "Kathmandu@gmail.com",
      gender: "male",
      attendance: "12",
      parent_info: "Hello I'm raman parent",
      password: "raman",
      image: "my-passport-photo.jpg",
    };
    chai
      .request(app)
      .post("/school/student/signup")
      .send(student)
      .end((err, res) => {
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        done();
      });
  });
});

describe("/POST staff", () => {
  it("it should register the staff info", (done) => {
    const staff = {
      fullname: "Maheswor raj shrestha",
      address: "Kathmandu",
      number: "9877765433",
      email: "maheshwor@gmail.com",
      gender: "male",
      attendance: "22",
      citizenshipno: "09-87787-987665",
      type: "teacher",
      amount: "80000",
      password: "mahesh",
      image: "my-passport-photo.jpg",
    };
    chai
      .request(app)
      .post("/school/staff/signupStaff")
      .send(staff)
      .end((err, res) => {
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        done();
      });
  });
});
