class Employee{

    firstName;
    jobSchedule;

    constructor(
        firstName = this.firstName,
        jobSchedule = this.jobSchedule
    ){
        this.firstName=firstName;
        this.jobSchedule=jobSchedule;
    }
}

module.exports = Employee