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
            message: "What's your intern's name?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter a name`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an ID`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an email address`
                } else if (data.includes('@') !== true) {
                    return `Enter a valid email address`
                }
                return true
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter a school`
                }
                return true
            }
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
            message: "What's your engineer's name?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter a name`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an ID`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an email address`
                } else if (data.includes('@') !== true) {
                    return `Enter a valid email address`
                }
                return true
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github user name?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter a github user name`
                }
                return true
            }
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
            message: "Who is your team's manager?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter a name`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an ID`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (data) => {
                if (data === '') {
                    return `Please enter an email address`
                } else if (data.includes('@') !== true) {
                    return `Enter a valid email address`
                }
                return true
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?",
            validate: (data) => {
                if (isNaN(data)) {
                    return `Please enter numbers`
                } else if (data === '') {
                    return `Please enter the manager's office number`
                }
                return true
            }
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
            console.log(team);
            let html = renderHTML(team);
            fs.writeFile("./dist/team.html", html, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML file!'))
          break;
        }
})}

// Start app with managerPrompt function
managerPrompt();