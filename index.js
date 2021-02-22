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
startPrompt();
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

// add employees
// addEmployee();
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "enter employee's first name.",
      },
      {
        type: "input",
        name: "last_name",
        message: "enter employee's lastname.",
      },
      {
        type: "input",
        name: "role_id",
        message: "enter employee's role id number.",
      },
      {
        type: "input",
        name: "manager_id",
        message: "enter employee's manager id number.",
      },
    ])
    .then((res) => {
      console.table(res);
      connection.query("INSERT INTO employee SET ?", {
        first_name: res.first_name,
        last_name: res.last_name,
        role_id: res.role_id,
        manager_id: res.manager_id,
      }),
        function (error) {
          if (error) throw error;
          console.table(res);
          startPrompt();
        };
    });
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
}

// add Role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "enter employee's title.",
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
    .then((res) => {
      console.table(res);
      connection.query("INSERT INTO role SET ?", {
        title: res.title,
        salary: res.salary,
        department_id: res.department_id,
      }),
        function (error) {
          if (error) throw error;
          console.table(res);
          startPrompt();
        };
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
    .then((res) => {
      console.table(res);
      connection.query("INSERT INTO department SET ?", {
        name: res.name,
      }),
        function (error) {
          if (error) throw error;
          console.table(res);
          startPrompt();
        };
    });
}
