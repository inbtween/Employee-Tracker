const inquirer = require("inquirer");
const connection = require("./connection");

class Employee {
  constructor(sql) {
    this.sql = sql;
  }
  createEmployee() {
    return this.connection.query("INSERT INTO employee table WHERE ?, ");
  }
}

class Employee {
  constructor(id, first_name, last_name, role_id, manager_id) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role;
    this.manager_id = manager_id;
  }

  getId() {
    return this.id;
  }
  getFirstName() {
    return this.first_name;
  }
  getLastNmae() {
    return this.last_name;
  }
  getRoleId() {
    return this.role_id;
  }
  getManagerId() {
    return this.manager_id;
  }
}

// let db = new Employee(connection);

// let inputName = db.addEmployee(inputName);
