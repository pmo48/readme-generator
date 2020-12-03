// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your project installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license does your project have?',
      choices: ['mit', 'apache-2.0', 'gpl-3.0']
    },
    {
      type: 'input',
      name: 'githubUN',
      message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'What is your github profile link?',
      },
      {
        type: 'input',
        name: 'githubRepo',
        message: 'What is your github repo name?',
      },
     {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Which tests would you like to include?',
      },
  ]);

  function generateMarkdown(data) {
    return `# ${data.title} ![license](https://img.shields.io/github/license/${data.githubUN}/${data.githubRepo})
    \n## Table of Contents\n
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#tests)
  - [Tests](#tests)
  - [Questions](#questions)
    \n## Description
    \n${data.description}
    \n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \n## License

[${data.license}](https://choosealicense.com/licenses/${data.license}/)
    \n## Contributing
    \nIf you would like to contribute it, please utilize The [Contributor Covenant](https://www.contributor-covenant.org/) as a guideline.
    \n## Tests
    \n${data.tests}
    \n## Questions
    \n### What's your GitHub info?
    \nMy GitHub username is ${data.githubUN} and my profile can be found at ${data.githubLink}
    \n### What other contact info do you have?
    \nI can be contacted via email at ${data.email} if you have any additional questions.
    `;
  }
  
  module.exports = generateMarkdown;

promptUser()
  .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));



