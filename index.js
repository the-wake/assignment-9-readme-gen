const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
];

function init() {
    inquirer
    .prompt([...questions])
    .then((answers) => {
        var mdText = writeToFile(answers);
        fs.writeFile('exampleREADME.md', mdText, (err) => {
            if (err) {
                console.log(err);
            }
        })
    })
}

// Criteria called for the title to be generated dynamically. However I would confirm with the client that this is what they want, since it is not standard practice. Also it prevents us from git ignoring prototype readme files.
function writeToFile(data) {
    return generateMarkdown(data);
}


init();
