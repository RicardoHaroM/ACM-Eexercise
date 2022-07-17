class SingletonRegister{
    static instance;
    employeesConcurrence={}
    concurrenceResult;

    constructor(employeesConcurrence={}){
        if( !!SingletonRegister.instance ){
            return SingletonRegister.instance;
        }

        SingletonRegister.instance = this;
        this.employeesConcurrence= employeesConcurrence;
        this.concurrenceResult=[]
    }

    addEmployeeConcurrence(nameFirstEmployee,nameSecondEmployee){
        let key;

        if(this.employeesConcurrence.hasOwnProperty(`${nameSecondEmployee}-${nameFirstEmployee}`)){
            key = `${nameSecondEmployee}-${nameFirstEmployee}`;
            this.employeesConcurrence[key]++;
        }else if(this.employeesConcurrence.hasOwnProperty(`${nameFirstEmployee}-${nameSecondEmployee}`)){
            key = `${nameFirstEmployee}-${nameSecondEmployee}`;
            this.employeesConcurrence[key]++;
        }else{
            key = `${nameFirstEmployee}-${nameSecondEmployee}`;
            this.employeesConcurrence[key]= 1;
        }

    }

    storeSetEmployeesResult(){

        this.concurrenceResult.push(Object.assign(this.employeesConcurrence));
        this.deleteAllEmployeesConcurrence();
    }

    deleteAllEmployeesConcurrence(){
        this.employeesConcurrence={}
    }

    printEmployeesConcurrence(){
        for(let i=0;i<this.concurrenceResult.length;i++){
            console.log(`\nExample ${i+1}`)
            let employeesName = Object.keys(this.concurrenceResult[i]);
            for(let j=0; j< employeesName.length; j++){
                console.log(`${employeesName[j]}: ${this.concurrenceResult[i][employeesName[j]]}`)
            }
        }
    }

}

module.exports = SingletonRegister;