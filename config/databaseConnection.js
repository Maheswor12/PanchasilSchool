const Sequelize = require("sequelize");
const sequelize = new Sequelize("school", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("database Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  Sequelize,
  sequelize,
};
