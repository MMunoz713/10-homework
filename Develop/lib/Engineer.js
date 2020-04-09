//Creates engineer file extended from employee
const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.github = username
    }
    
    getRole() {
        return this.constructor.name
    }

    getGithub() {
        return this.username
    }
}

module.exports = Engineer;