//begin the app in terminal
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


const outputPath = path.resolve(__dirname, "output", main.html)

const render = require("./lib/teamGenerator")

const idArray =[];
const teamMember =[];

function app() {
    function createTeam() {
        console.log("please build your Team");
        inquirer.prompt([
            {
                type: "input",
                name: "mainName",
                message
            }
        ])
    }
}