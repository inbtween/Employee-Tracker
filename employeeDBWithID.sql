-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER NOT NULL AUTO_INCREMENT,
   -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(45) NULL,
  salary DECIMAL(10,2) NULL,
  deptartment_id INTEGER NULL,
   -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO employee (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO employee (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO employee (name, has_pet, pet_name, pet_age)
VALUES ("Jacob",true,"Misty",10);


-- Updates the row where the column name is peter --
UPDATE employee
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE id = 4;


SELECT * FROM deptartment;
SELECT * FROM role;
SELECT * FROM employee;


-- Creates the table "employee" within employee_db --
-- CREATE TABLE employee (
--   -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   -- Makes a string column called "name" which cannot contain null --
--   name VARCHAR(30) NOT NULL,
--   -- Makes a boolean column called "has_pet" which cannot contain null --
--   has_pet BOOLEAN NOT NULL,
--   -- Makes a sting column called "pet_name" --
--   pet_name VARCHAR(30),
--   -- Makes an numeric column called "pet_age" --
--   pet_age INTEGER(10),
--   -- Sets id as this table's primary key which means all data contained within it will be unique --
--   PRIMARY KEY (id)
-- );