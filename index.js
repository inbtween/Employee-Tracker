// This index in the fb folder is the ORM
const connection = require("./db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  startPrompt();
});

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
}

// manager questions
// startPrompt();
function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View Employees?",
          "View Employees by Roles?",
          "View Emplyees by Department?",
          "Update an Employee?",
          "Add an Employee?",
          "Add a Role?",
          "Add to a Department?",
        ],
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View Employees?":
          viewEmployees();
          break;

        case "View Employees by Roles?":
          viewRoles();
          break;

        case "View Employees by Department?":
          viewDepartments();
          break;

        case "Update an Employee?":
          updateEmployee();
          break;

        case "Add an Employee?":
          addEmployee();
          break;

        case "Add a Role?":
          addRole();
          break;

        case "Add to a Department?":
          addDepartment();
          break;
      }
    });
}

// view employees
function viewEmployees() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(employee.first_name, ' ' ,employee.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

// view roles
function viewRoles() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

// view department
function viewDepartments() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

// select role
var role = [];
function selectRole() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      role.push(res[i].title);
    }
  });
  return role;
}

// select manager
var manager = [];
function selectManager() {
  connection.query(
    "SELECT first_name, last_name FROM employee WHERE manager_id IS NULL",
    function (err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        manager.push(res[i].first_name);
      }
    }
  );
  return manager;
}

// add employees
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "enter employee's first name.",
      },
      {
        type: "input",
        name: "lastname",
        message: "enter employee's lastname.",
      },
      {
        type: "input",
        name: "list",
        message: "Select employee's role.",
        choices: selectRole(),
      },
      {
        type: "input",
        name: "rawlist",
        message: "Select employee's manager.",
        choices: selectManager(),
      },
    ])
    .then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1;
      // var managerId = selectManager().indexOf(val.manager_id) + 1;
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: val.firstName,
          last_name: val.lastName,
          role_id: val.roleId,
          // manager_id: val.managerId,
        },
        function (err) {
          if (err) throw err;
          console.table(val);
          startPrompt();
        }
      );
    });
}

// update employees
function updateEmployee() {
  connection.query(
    "SELECT employee.last_name, role.title, manager_id FROM employee JOIN role ON employee.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "lastName",
        choices: function () {
          const lastName = [];
          for (let i = 0; i < res.length; i++) {
            lastName.push(res[i].last_name);
          }
          return lastName;
        },
        message: "enter employee's last name.",
      },
      {
        type: "rawlist",
        name: "role",
        message: "Select employee's role.",
        choices: selectRole(),
      },
      {
        type: "input",
        name: "rawlist",
        message: "Select employee's manager.",
        choices: selectManager(),
      },
    ])
    .then(function (val) {
      const roleId = selectRole().indexOf(val.role) + 1;
      const managerId = selectManager().indexOf(val.choice) + 1;
      connection.query(
        "UPDATE employee SET WHERE ?",
        {
          last_name: val.lastName,
          role_id: val.roleId,
          manager_id: val.managerId,
        },
        function (err) {
          if (err) throw err;
          console.table(val);
          startPrompt();
        }
      );
    });
}

// add Role
function addRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "enter employee's title?",
        choices: [
          "Designer",
          "Animator",
          "Art Director",
          "Creative Director",
          "Producer",
          "Executive Producer",
        ],
      },
      {
        type: "input",
        name: "salary",
        message: "enter employee'salary.",
      },
      {
        type: "input",
        name: "department_id",
        message: "enter employee's department id number.",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: res.title,
          salary: res.salary,
          department_id: res.department_id,
        },
        function (error) {
          if (error) throw error;
          console.table(res);
          startPrompt();
        }
      );
    });
}
// add department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "enter employee's department.",
        choices: [
          "Art Dept",
          "Creative Services",
          "On-Air Design",
          "Off Air Design",
        ],
      },
    ])
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ? ",
        {
          name: res.name,
        },
        function (error) {
          if (error) throw error;
          console.table(res);
          startPrompt();
        }
      );
    });
}
