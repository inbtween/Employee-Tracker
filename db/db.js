const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }
  addEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  addRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }
  addDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  findAllDepartments() {
    return this.connection.query("SELECT * FROM department");
  }
  findAllEmployees() {
    return this.connection.query("SELECT * FROM employee");
  }
  findAllRoles() {
    return this.connection.query("SELECT * FROM role");
  }
  updateEmployeeRole() {
    // employee.id, role.id
    return this.connection.query("SELECT * FROM role", employee);
  }
}

module.exports = new Database(connection);
