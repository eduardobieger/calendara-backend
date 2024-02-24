CREATE DATABASE calendara_database;

CREATE TABLE users_table(
  user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(30) UNIQUE NOT NULL,
  password VARCHAR(30) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL
);

CREATE TABLE appointments_table(
  appointment_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL
);
