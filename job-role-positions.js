// This index in the fb folder is the ORM
const DataBase = require("./db/db");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promiseMysql = require("promise-mysql");

// manager questions
// startPrompt();
function startPrompt() {
  const { choice } = inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View Employees?",
          "View Employees by Roles?",
          "View Employees by Department?",
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
          viewEmployeesDepartments();
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

        case "Update an Employee?":
          updateEmployee();
          break;
      }
    });
}

// view employees
function viewEmployees() {
  let query =
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(employee.first_name, ' ' ,employee.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}

function viewRoles() {
  let role = [];

  promiseMysql
    .createConnection(connection)
    .then((connection) => {
      connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          role.push(res[i].title);
        }
      });
    })
    .then(() => {
      inquirer
        .prompt({
          type: "list",
          name: "role",
          message: "Select employee's role.",
          choices: role,
        })
        .then((res) => {
          const query = `SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;WHERE role.title = '${res.role}' ORDER BY ID ASC`;
          connection.query(query, (err, res) => {
            if (err) return err;
            console.table("res");
            startPrompt();
          });
        });
    });
}

// view department
function viewEmployeesDepartments() {
  let dept = [];
  promiseMysql
    .createConnection(connection)
    .then((connection) => {
      return connection.query("SELECT name FROM department");
    })
    .then(function (value) {
      dept = value;
      for (i = 0; i < value.length; i++) {
        dept.push(value[i].name);
      }
    })
    .then(() => {
      inquirer.prompt({
        type: "department",
        type: "list",
        message: "Which department would you want to view?",
        choices: dept,
      });
    })
    .then((res) => {
      const query = `SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, mployee.id AS ID, INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.name = '${res.department}' ORDER BY ID ASC`;
      connection.query(query, (err, res) => {
        if (err) return err;
        console.table("res");
        startPrompt();
      });
    });
}

// select role
function selectRole() {}

// select manager

function selectManager() {
  let manager = [];
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
      DataBase.addEmployee({
        first_name: val.firstName,
        last_name: val.lastName,
        role_id: val.roleId,
        manager_id: val.manager,
      });
    });
}

startPrompt();

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

const addEmployee = () => {
  // is this correct below?
  inquirer.prompt().then((res) => {
    switch (res.title) {
      case "Designer":
        addDesigner();
        break;
      case "Animator":
        addAnimator();
        break;
      case "Art Director":
        addArtDirector();
        break;
      case "Creative Director":
        addCreativeDirector();
        break;
      case "Producer":
        addProducer();
        break;
      case "Executive Producer":
        addExecutiveProducer();
        break;
      // default:
      //   buildTeam();
    }
  });
  // is this correct?
  inquirer.prompt().then((res) => {
    switch (res.name) {
      case "Art Dept":
        addArtDepartment();
        break;
      case "Creative Services":
        addCreativeServices();
        break;
      case "On-Air Design":
        addOnAirDesign();
        break;
      case "Off-Air Design":
        addOffAirDesign();
        break;
      default:
        console.table(res);
    }
  });
};
