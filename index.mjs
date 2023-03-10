import inquirer from 'inquirer';
import fs from "fs/promises";

let {username, fullname, email, title, description, installation, usage, contribution, test, license} = await inquirer 
    .prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'fullname',
        message: 'What is your full name?',
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
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: ['Boost', 'Unlicense', 'MIT'],
      },
    ])

console.log(username, fullname, email, title, description, installation, usage, contribution, test, license);

const boost = `
Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:

The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

const boostBadge = `
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

const unlicense = `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`

const unlicenseBadge = `
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

const mit = `
MIT License

Copyright (c) 2023 ${fullname}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

const mitBadge = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

let licenseToUse = "";
let licenseBadge = "";

if (license === 'Boost') {
  licenseToUse = boost;
  licenseBadge = boostBadge;
} else if (license === 'Unlicense') {
  licenseToUse = unlicense;
  licenseBadge = unlicenseBadge;
} else {
  licenseToUse = mit;
  licenseBadge = mitBadge;
}

console.log(licenseBadge);

let readmeText = `# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#tests">Test</a></li>
<li><a href="#questions">Questions</a></li>

## Installation
${installation}

## Usage
${usage}

## License
${licenseToUse}

## Contributing
${contribution}

## Tests
${test}

## Questions
For any questions, you can contact me here: https://github.com/${username}

Or alternatively, you can email me at ${email}`

fs.writeFile("generated-readme/README.md", readmeText);


