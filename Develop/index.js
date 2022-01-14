const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
const questions = [
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
];



// TODO: Create a function to write README file
function writeToFile(data) { // Had a filename argument before data
    return generateMarkdown(data);
}

// // TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        questions[0],
        questions[1],
        questions[2],
        questions[3],
        questions[4],
        questions[5],
        questions[6],
        questions[7],
        questions[8],
        questions[9],
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
}


init();

