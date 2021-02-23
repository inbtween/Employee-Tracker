// This index in the fb folder is the ORM
const DataBase = require("./db/db");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promiseMysql = require("promise-mysql");
const { connection } = require("./db/db");
const Quit = require("mysql/lib/protocol/sequences/Quit");

// manager questions
// startPrompt();
function startPrompt() {
  inquirer
    .prompt([
      {
        name: "View Employees?",
        value: "findAllEmployees",
      },
      {
        name: "View Employees by Roles?",
        value: "findAllRoles",
      },
      {
        name: "View Employees by Department?",
        value: "findAllDepartments",
      },
      {
        name: "Update an Employee?",
        value: "updateEmployee",
      },
      {
        name: "Add an Employee?",
        value: "addEmployee",
      },
      {
        name: "Add a Role?",
        value: "addRole",
      },
      {
        name: "Add to a Department?",
        value: "addDepartment",
      },
      {
        name: "Update an Employee?",
        value: "updateEmployee",
      },
      {
        name: "Quit",
        value: "quit",
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View Employees?":
          return findAllEmployees();

        case "View Employees by Roles?":
          return findAllRoles();

        case "View Employees by Department?":
          return findAllDepartments();

        case "Add an Employee?":
          return addEmployee();

        case "Add a Role?":
          return addRole();

        case "Add to a Department?":
          return addDepartment();

        case "Update an Employee?":
          return updateEmployee();
        default:
          return quit();
      }
    });
}

// add employees
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "Enter employee's first name.",
      },
      {
        type: "input",
        name: "lastname",
        message: "Enter employee's lastname.",
      },
      {
        type: "input",
        name: "list",
        message: "Add employee's role.",
        choices: addRole(),
      },
      {
        type: "input",
        name: "rawlist",
        message: "add employee's manager.",
        choices: addManager(),
      },
    ])
    .then(function (val) {
      var roleId = addRole().indexOf(val.role) + 1;
      // var managerId = addManager().indexOf(val.manager_id) + 1;
      DataBase.addEmployee({
        first_name: val.firstName,
        last_name: val.lastName,
        role_id: val.roleId,
        manager_id: val.manager,
      });
    });
}

startPrompt();
