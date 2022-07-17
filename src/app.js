const TxtManager = require('./classes/txtManager');
const CompanySchedule = require('./classes/companySchedule');
const SingletonRegister = require('./classes/singletonRegister');

const inputDataManager = new TxtManager();

let rawInputData = inputDataManager.getDataFromTXT('./inputData/input.txt');

let employeeDataSets = inputDataManager.deserializeDataToDataSets(rawInputData);

let employeesRegister = new SingletonRegister();

for(let i = 0; i < employeeDataSets.length; i++){
    
    let acmeSchedule = new CompanySchedule();

    let employeeDataLines= inputDataManager.deserializeDataToDataLines(employeeDataSets[i])

    for(let j=0 ; j < employeeDataLines.length; j++){
        let employeeInformation = inputDataManager.deserializeDataToEmployee(employeeDataLines[j]);

        acmeSchedule.registerEmployeeSchedule(employeeInformation)
    }
    
    employeesRegister.storeSetEmployeesResult();
}

employeesRegister.printEmployeesConcurrence();
