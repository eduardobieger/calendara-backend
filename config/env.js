require("dotenv").config();

const postgresqlHost = process.env.POSTGRESQL_HOST;
const postgresqlUsername = process.env.POSTGRESQL_USERNAME;
const postgresqlPassword = process.env.POSTGRESQL_PASSWORD;
const postgresqlDatabase = process.env.POSTGRESQL_DATABASE;
const bcryptSaltRounds = process.env.BCRYPT_SALT_ROUNDS;

module.exports = {
  postgresqlHost,
  postgresqlUsername,
  postgresqlPassword,
  postgresqlDatabase,
  bcryptSaltRounds,
};
