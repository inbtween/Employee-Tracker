// inquire.prompt;
// inquire employee_db
// import the class
// new Employee, new instance of the class
// all the methods this file to add, get all employees
// at the end of each one to go back to the main menu
// This index in the root uses the ORM
const inquirer = require("inquirer");

//  DEPENDECIES

// USER INTERACTIONS ==========================
const questions = [
  {
    // Create Employee?
    // Create Team?
    //  Create Manager?
    // Create Role?
    type: "list",
    name: "role",
    message: "what type of team member would you like to add?",
    choices: ["Manager", "Role", "None"],
  },
];
const questionsEmployee = [
  {
    type: "input",
    name: "name",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an employee's email.",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter an officer number.",
  },
];
const questionsManager = [
  {
    type: "input",
    name: "name",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an employee email.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub account.",
  },
];
const questionsRole = [
  {
    type: "input",
    name: "name",
    message: "Please enter your a name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter an employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an employee email.",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter your school.",
  },
];
const questionsTeam = [
  {
    type: "list",
    name: "role",
    message: "what type of team member would you like to add?",
    choices: ["Manager", "Role", "None"],
  },
];

// DATA

// FUNCTIONS
function menu() {
  const createEmployee = () => {
    // var Employee questions in prompt()
    // .then(answer)

    inquirer.prompt(questionsEmployee).then((answers) => {
      const Employee = new Employee(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      teamMembers.push(employee);
      id.push(answers.id);
      createTeam();
    });
  };
  const createTeam = () => {
    inquirer.prompt(questions).then((answers) => {
      switch (answers.role) {
        case "Manager":
          createManager();
          break;
        case "Role":
          createRole();
          break;
        default:
          buildTeam();
      }
    });
    // what type of team members
    // switch
    // choice run enginer(), Role(), buildteam()
  };
  const createManager = () => {
    inquirer.prompt(questionsManager).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(manager);
      id.push(answers.id);
      createTeam();
    });
  };
  const createRole = () => {
    inquirer.prompt(questionsRole).then((answers) => {
      const role = new Role(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(role);
      id.push(answers.id);
      createTeam();
    });
  };
  const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  };
  createEmployee();
}

menu();

const answers = (res) => {
  `${res.role}
    ${res.id}
    ${res.office}
    ${res.email}
    ${res.github}
    ${res.school}`; // write it to a file
  fs.writeFile(".src/index.html", html, (err) =>
    err ? console.error(err) : console.log("success")
  );
};
