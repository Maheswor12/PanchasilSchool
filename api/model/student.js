var database = require("../../config/databaseConnection.js");

var student = database.sequelize.define(
  "student",
  {
    //attributes
    studentid: {
      type: database.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fullname: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    address: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    number: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    gender: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    attendence: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    parent_info: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    password: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "student",
  }
);

student
  .sync({ force: false })
  .then(function () {
    console.log("success student");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = student;
