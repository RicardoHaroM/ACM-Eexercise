const SingletonRegister = require('../src/classes/singletonRegister')

let singletonRegister = new SingletonRegister();

test('Insert an employee concurrence',()=>{

    singletonRegister.addEmployeeConcurrence('Rene','Andres')
    
    expect(singletonRegister.employeesConcurrence.hasOwnProperty('Rene-Andres')).toBe(true);
    expect(singletonRegister.employeesConcurrence['Rene-Andres']).toBe(1);
    
    singletonRegister.addEmployeeConcurrence('Rene','Andres')
    expect(singletonRegister.employeesConcurrence['Rene-Andres']).toBe(2);
})

test('Store the employee concurrence result of a data set',()=>{

    singletonRegister.storeSetEmployeesResult();

    expect(singletonRegister.concurrenceResult.length).toBeGreaterThan(0);
})

test('Delete employees concurrence',()=>{
    singletonRegister.deleteAllEmployeesConcurrence();

    const result = Object.keys(singletonRegister.employeesConcurrence).length
    
    expect(result).toBe(0);
})