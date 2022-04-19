const fs = require("fs");
let description = "example text";
let projectName = "Fun Project";
let contactEmail = "gwg1387@gmail.com";

fs.writeFile(
  "README.md",
  `${projectName}

Contact:${contactEmail}

<br>

Associated Links

GIT Pages Link: 

GIT Repository Link: 

<br>

## Project Description

* ${description}
<br>

## Built With:

* HTML 5
* CSS


## Mock-Up

The following image shows the web application's appearance and functionality:

<br>

![Image of the webpage being deployed](./assets/images/HW7_ScreenShot.png)
`,
  (err) => (err ? console.error(err) : console.log("Success!"))
);
