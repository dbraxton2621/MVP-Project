DROP DATABASE IF EXISTS fuzzbuzz;
CREATE DATABASE fuzzbuzz;
\c fuzzbuzz
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS users;

CREATE TABLE employees (
    employee_id SERIAL primary key,
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    badge_number integer,
    department VARCHAR(50),
    employment_start_date DATE NOT NULL DEFAULT CURRENT_DATE, 
    rank VARCHAR (25)
);
-- CREATE TABLE users (
--     user_id SERIAL primary key,
--     first_name VARCHAR (50),
--     last_name VARCHAR (50),
--     age integer,
--     race VARCHAR(50),
--     gender VARCHAR(50)
-- );
-- CREATE TABLE ratings (
--     report_date DATE,
--     title VARCHAR (50),
--     comment VARCHAR (300),
--     rating integer,
--     location numeric, 
--     employee_id INT NOT NULL REFERENCES employees(employee_id),
--     user_id INT NOT NULL REFERENCES users(user_id)
-- );
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Devin', 'Braxton', '2621', 'Round Rock Police Department', '2017-06-26', 'Sergeant');
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Garrett', 'Ross', '5675', 'Round Rock Police Department', '2015-02-09', 'Lieutenant');
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Nikko', 'Colby', '4533', 'Round Rock Police Department', '2019-12-17', 'Officer');
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Jacob', 'Cantu', '7895', 'Round Rock Police Department', '2020-04-03', 'Officer');
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Alfred', 'Benford', '1312', 'Round Rock Police Department', '2021-07-19', 'Officer');
INSERT INTO employees (first_name, last_name, badge_number, department, employment_start_date, rank) VALUES ('Thaun', 'Dang', '0981', 'Round Rock Police Department', '2021-05-23', 'Officer'); 