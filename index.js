// Add imports
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Add npm
const fs = require("fs");
const inquirer = require("inquirer");

// Make an object for the team
let team = [];

// Function to prompt user to add more roles
const addMenu() => {
    
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

// Start app with managerPrompt function
managerPrompt();