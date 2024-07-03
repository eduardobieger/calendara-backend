import dotenv from "dotenv";

dotenv.config();

export const postgresqlHost = process.env.POSTGRESQL_HOST!;
export const postgresqlUsername = process.env.POSTGRESQL_USERNAME!;
export const postgresqlPassword = process.env.POSTGRESQL_PASSWORD!;
export const postgresqlDatabase = process.env.POSTGRESQL_DATABASE!;
export const bcryptSaltRounds = process.env.BCRYPT_SALT_ROUNDS!;
