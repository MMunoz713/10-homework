//Creates intern file extended from employee
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id , email, schoolName) {
        super(name, id, email);
        this.school = schoolName;
    }

    getRole() {
        return this.constructor.name;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;