// Add imports
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const renderHTML = require("./src/renderHTML");

// Add npm
const fs = require("fs");
const inquirer = require("inquirer");

// Make an object for the team
let team = [];



// Function that have questions to prompt for intern
const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        addMenu();
    })
}

// Function that have questions to prompt for engineer
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github user name?"
        }
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        addMenu();
    })
}

// Function that have questions to prompt for manager
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is your team's manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        }
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addMenu();
    })
}

// Function to prompt user to add more roles
const addMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Add a new employee?",
            choices: [
                "Engineer",
                "Intern",
                "Done with employee list"
            ]
        }
    ]).then(data => {
        switch (data.newEmployee) {
          case "Engineer":
            engineerPrompt();
          break;
          case "Intern":
            internPrompt();
          break;
          case "Done with employee list":
            let html = renderHTML(team);
            fs.writeFile("./dist/team.html", html, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML file!'))
          break;
        }
})}

// Start app with managerPrompt function
managerPrompt();