const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
.prompt([
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Usage Information:',
        name: 'usage',
    },
    {
        type: 'list', // Can change to checkbox if I can get the script working for it
        message: 'License:',
        choices: ['Apache', 'BSD', 'GNU', 'MIT', 'Mozilla Public License', 'None',],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Contribution Guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter Test Instructions:',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Questions:',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
])
.then((answers) => {
    var mdText = writeToFile(answers);
    fs.writeFile('newREADME.md', mdText, (err) => {
        if (err) {
            console.log(err);
        }
        // console.log("Successful!");
    })
})

// TODO: Create a function to write README file
function writeToFile(data) { // Had a filename argument before data
    return generateMarkdown(data);
}

// // TODO: Create a function to initialize app
// function init() {}


// init();





// // TODO: Create an array of questions for user input
// const questions = [];
