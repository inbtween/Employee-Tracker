// This index in the fb folder is the ORM
const inquirer = require("inquirer");
const connection = require("./connection");

// class Employee {
//   constructor(sql) {
//     this.sql = sql;
//   }
//   createEmployee() {
//     return this.connection.query("INSERT INTO employee table,");
//   }
// }

function employee() {
  connection.query("SELECT * FROM employee", function (error, results) {
    if (error) throw error;
    console.log(results);
    connection.end();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      // {
      //   type: "input",
      //   name: "id",
      //   message: "enter employee's id number.",
      // },
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
    .then((answers) => {
      console.log(answers);
      connection.query("INSERT INTO employee SET ?"),
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role_id,
          manager_id: answers.manager_id,
        },
        function (error) {
          if (error) throw error;
          console.log("added Employee");
          addEmployee();
        };
    });
}

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
    .then((answers) => {
      console.log(answers);
      connection.query("INSERT INTO role SET ?"),
        {
          title: answers.title,
          salary: answers.salary,
          department_id: answers.department_id,
        },
        function (error) {
          if (error) throw error;
          console.log("added Role");
          addRole();
        };
    });
}

function addRole() {
  inquirer
    .prompt([
      // {
      //   type: "input",
      //   name: "id",
      //   message: "enter employee's id number.",
      // },
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
    .then((answers) => {
      console.log(answers);
      connection.query("INSERT INTO department SET ?"),
        {
          name: answers.name,
        },
        function (error) {
          if (error) throw error;
          console.log("added Department");
          addDepartment();
        };
    });
}
// constructor(id, first_name, last_name, role_id, manager_id)
//     this.id = id;
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.role_id = role;
//     this.manager_id = manager_id;

// let db = new Employee(connection);

// let inputName = db.addEmployee(inputName);
