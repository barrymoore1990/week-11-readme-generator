import inquirer from 'inquirer';
import fs from "fs/promises";

let {username, email, title, description, installation, usage, contribution, test} = await inquirer 
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Write the installation instructions of your project',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Write the usage instructions of your project',
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'Write the contribution guidelines of your project',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Write the test instructions of your project',
          },
    ])

let readmeText = `# ${title}


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

###### The smallest heading`

fs.writeFile("README.md", readmeText);
