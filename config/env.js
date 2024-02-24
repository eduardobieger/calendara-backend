require("dotenv").config();

const postgresqlHost = process.env.POSTGRESQL_HOST;
const postgresqlUsername = process.env.POSTGRESQL_USERNAME;
const postgresqlPassword = process.env.POSTGRESQL_PASSWORD;
const postgresqlDatabase = process.env.POSTGRESQL_DATABASE;

module.exports = {
  postgresqlHost,
  postgresqlUsername,
  postgresqlPassword,
  postgresqlDatabase
}
