// TODO: Include packages needed for this application
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");
var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = (data) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
    // description of project
    {
      type: "input",
      name: "description",
      message: "Enter description (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your description!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "contributors",
        message: "How can others contribute to this project?(Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter how others can contribute!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "How can others write tests for this project?(Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter how others can write tests!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "How can others use this project?(Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter how others can use this project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "intsallation",
        message: "How can others install this project?(Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter how others can install this project!");
            return false;
          }
        },
      },
    {
      type: "list",
      name: "license",
      message: "Enter license (Required)",
      choices: ["Apache 2.0", "MPL 2.0", "MIT"],
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter License!");
          return false;
        }
      },
    },
  ]);
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions().then(
  (writeToFile = (data) => {
    const readMe = generate(data);
    // creates a README.md file, takes in the data argument and throws a new error if something went wrong
    fs.writeFile("./README.md", readMe, (err) => {
      if (err) throw new Error(err);

      console.log(
        "README has been created! Check out README.md in this directory to see it!"
      );
    });
  })
);
