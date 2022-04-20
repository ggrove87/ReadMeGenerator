const fs = require("fs");
const inquirer = require("inquirer");
let description = "example text";
let projectName = "Fun Project";
let contactEmail = "gwg1387@gmail.com";


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'list',
      choices: ["MIT", "GPL",  ],
      message: 'What license did you use?',
      name: 'license',
    },
    {
        type: 'input',
        message: "What is you preferred method of communication?",
        name: 'communicationMethod',
    },
  ])
  .then((response) =>
  fs.writeFile(
    "README.md",
    `${projectName}
  
  Contact:${contactEmail}
  
  <br>
  
  Associated Links
  
  GIT Pages Link: 
  
  GIT Repository Link: 
  
  <br>
  
  ## <h2 id = "projectDescription"> Project Description </h2>
  
  * ${description}
  <br>
  
  ## <h2 id = "tableOfContents"> Table of Contents: </h2>
  <ol>
  * <a href="#projectDescription">Description</a>
  * <a href="#tableOfContents">Table of Contents</a>
  * <a href="#installation">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#license">License</a>
  * <a href="#contributing">Contributing</a>
  * <a href="#tests">Tests</a>
  * <a href="#questions">Questions</a>
  </ol>
  
  ## <h2 id = "installation">Installation </h2>

  ## <h2 id = "usage"> Usage </h2>

  ## <h2 id ="license"> License </h2>

  ## <h2 id="contributing"> Contributing </h2>

  ## <h2 id="tests"> Tests </h2>

  # <h2 id="questions">Questions</h2>
  `,
    (err) => (err ? console.error(err) : console.log("Read me successfully generated!"))
  )
  );




