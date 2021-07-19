// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'title',        
       message: "What is your project title?"
    },  
    {
        type: 'input',
        name: 'project',        
        message:  "Describe your project", 
     },
     {
        type: 'input',
        name: 'install',        
        message: "What are installation instructions", 
     },
     {
        type: 'input',
        name: 'usage',        
        message: "Describe the usage information",
     },
     {
        type: 'input',
        name: 'guideline',        
        message:  "What are the contribution guidelines", 
     },
     {
        type: 'input',
        name: 'test',        
        message: "What are the test instructions?",
     },
     {
        type: 'list',
        name: 'license',        
        message: "What license does your project have?",
        choices: ["MIT", "GPLv2", "Apache", "None"],
     },
     {
        type: 'input',
        name: 'github',        
        message: "What is your GitHub username?",
     },
     {
        type: 'input',
        name: 'email',        
        message: "What is your email?",
     },
            
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
