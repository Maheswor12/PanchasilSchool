var database = require("../../config/databaseConnection.js");

var staff = database.sequelize.define(
  "staff",
  {
    //attributes
    staffid: {
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
    citizenshipno: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    type: {
      type: database.Sequelize.TEXT,
      allowNull: false,
    },
    amount: {
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
    tableName: "staff",
  }
);

staff
  .sync({ force: false })
  .then(function () {
    console.log("success staff");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = staff;
