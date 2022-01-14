# Readme Generator

## Description
This is a back-end readme generator run via node.

## Installation
Users must use npm to install inquirer to the application before running. From the command line, run:
```
npm init -y
npm i inquirer
```

## Usage
To use the readme generator, install Node. Then open the application's parent directory in the terminal and run:
```
node index.js
```

You will be prompted to input a number of parameters such as Project Title, Description, Installation, and License Information. The readme will then be created using the *fs.writeFile* method and populated with their entries. The file will include a Table of Contents with anchors for the specified headers. 

[Click for a video demonstrating usage and functionality.](https://user-images.githubusercontent.com/56139228/149438940-9a0e14c6-b709-408e-acaf-f29f2ab3586c.mp4)

Note that the user can specify no license. In this case, the License section (and its corresponding listing in the table of contents) will not be generated.

## Tools Used
* JavaScript
* Node.js
* NPM
* inquirer
* GitHub
* GitBash
* Video captured with screencastify
* Coded in VS Code

## Future Functionality
* The License list could be expanded, and turned into a checkbox so more than one could be selected.
* The switch in generateMarkdown.js could be turned into its own function so it can be passed into multiple functions easily.
* The above would also allow easily adding a link to the license string in the readme body output.