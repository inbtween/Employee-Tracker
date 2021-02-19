// inquire.prompt;
// inquire employee_db
// import the class
// new Manager, new instance of the class
// all the methods this file to add, get all employees
// at the end of each one to go back to the main menu
const inquirer = require("inquirer");

//  DEPENDECIES
const Manager = require("./db/Manager");
const Engineer = require("./db/Engineer");
const Intern = require("./db/Intern");

const path = require("path");
const fs = require("fs");
const Choice = require("inquirer/db/objects/choice");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/writeindex");
const teamMembers = [];
const id = [];

// USER INTERACTIONS ==========================
const questions = [
  {
    // Create Manager?
    // Create Team?
    //  Create Engineer?
    // Create Intern?
    type: "list",
    name: "role",
    message: "what type of team member would you like to add?",
    choices: ["Engineer", "Intern", "None"],
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
    message: "Please enter an employee's email.",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter an officer number.",
  },
];
const questionsEngineer = [
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
const questionsIntern = [
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
    choices: ["Engineer", "Intern", "None"],
  },
];

// DATA

// FUNCTIONS
function menu() {
  const createManager = () => {
    // var manager questions in prompt()
    // .then(answer)

    inquirer.prompt(questionsManager).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      teamMembers.push(manager);
      id.push(answers.id);
      createTeam();
    });
  };
  const createTeam = () => {
    inquirer.prompt(questions).then((answers) => {
      switch (answers.role) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          buildTeam();
      }
    });
    // what type of team members
    // switch
    // choice run enginer(), intern(), buildteam()
  };
  const createEngineer = () => {
    inquirer.prompt(questionsEngineer).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      id.push(answers.id);
      createTeam();
    });
  };
  const createIntern = () => {
    inquirer.prompt(questionsIntern).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
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
  createManager();
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
