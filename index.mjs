import inquirer from 'inquirer';
import fs from "fs/promises";

let {username, email, title, description} = await inquirer 
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
    ])

let readmeText = `# ${title}


## Description
${description}




###### The smallest heading`

fs.writeFile("README.md", readmeText);
console.log(username, email, title, description);
