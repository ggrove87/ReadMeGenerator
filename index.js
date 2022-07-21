const fs = require("fs");
const inquirer = require("inquirer");
let imageSource = "";

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions.',
        name: 'installation',
    }, 
    {
        type: 'input',
        message: "What is this application used for?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "What are the rules for contributing to this application?",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Please enter the testing instructions.",
        name: 'tests',
    },
    {
        type: 'list',
        choices: ["MIT", "GPL", "WTFPL" ],
        message: 'What license did you use?',
        name: 'license',
    },
    {
        type: 'input',
        message: "Please enter the link to your GitHub profile.",
        name: 'gitHub',
    },
    {
        type: 'input',
        message: "Please enter your preferred contact email.",
        name: 'email',
    },
  ])
  .then((response) =>{
  determineIcon(response.license),
  fs.writeFile(
    "README.md",
    `<h1>${response.title}</h1> 
    
${imageSource}  
  <br>
  
  ## <h2 id = "projectDescription"> Project Description </h2>
  
  * ${response.description}
  <br>
  
  ## <h2 id = "tableOfContents"> Table of Contents: </h2>
  <ol>
  <a href="#projectDescription">Description</a>
  <a href="#tableOfContents">Table of Contents</a>
  <a href="#installation">Installation</a>
  <a href="#usage">Usage</a>
  <a href="#license">License</a>
  <a href="#contributing">Contributing</a>
  <a href="#tests">Tests</a>
  <a href="#contact">Contact</a>
  </ol>
  
  ## <h2 id = "installation">Installation </h2>
    ${response.installation}
  ## <h2 id = "usage"> Usage </h2>
    ${response.usage}
  ## <h2 id ="license"> License </h2>
    ${response.license}
  ## <h2 id="contributing"> Contributing </h2>
    ${response.contributing}
  ## <h2 id="tests"> Tests </h2>
    ${response.tests}
  # <h2 id="contact">Contact</h2>
    Link to my GitHub: ${response.gitHub}
    Direct email: ${response.email}
  `,
    (err) => (err ? console.error(err) : console.log("Read me successfully generated!"))
  )
 } );


function determineIcon(licenseType){
    if(licenseType === "MIT"){
        imageSource = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (licenseType === 'GPL') {
        imageSource = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else {
        imageSource ="[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }
}

