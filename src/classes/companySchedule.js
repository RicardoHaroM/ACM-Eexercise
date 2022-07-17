const SingletonRegister = require("./singletonRegister");
const TimeRecord = require("./timeRecord");
const TxtManager = require("./txtManager");

class CompanySchedule{
    
    weekSchedule;
    employeeRegister;

    constructor(){
        this.weekSchedule={}
        this.employeeRegister = new SingletonRegister();
    }

    registerEmployeeSchedule(employeeInformation){
        let dataManager = new TxtManager();
        for(let i = 0;i<employeeInformation.jobSchedule.length;i++){
            let daySchedule= dataManager.deserializeDataToDaySchedule(employeeInformation.jobSchedule[i]);
            this.addTimeRecordInSchedule(daySchedule,employeeInformation.firstName);
        }
    }

    addTimeRecordInSchedule(daySchedule,employeeName){

        let timeRecord = new TimeRecord(employeeName,daySchedule.startHour,daySchedule.endHour);
        
        if(!this.weekSchedule.hasOwnProperty(daySchedule.dayName)){
            this.weekSchedule[daySchedule.dayName]=[]
            this.weekSchedule[daySchedule.dayName].push(timeRecord)
        }else{
            
            let indexForNewElement = this.compareRecordsInTheSameInterval(daySchedule.dayName,timeRecord);
            
            this.weekSchedule[daySchedule.dayName].splice(indexForNewElement,0,timeRecord)
        }
    }


    compareRecordsInTheSameInterval(dayName,timeRecord){
        
        let indexForNewElement;

        for(let i = 0;i<this.weekSchedule[dayName].length;i++){

            let timeElementInSchedule = this.weekSchedule[dayName][i]

            if(timeRecord.areInTheSameTimeFrame(timeElementInSchedule.startHour,timeElementInSchedule.endHour)){
                this.employeeRegister.addEmployeeConcurrence(timeElementInSchedule.employeeName,timeRecord.employeeName)
            }

            if(timeRecord.startHour>timeElementInSchedule.startHour && indexForNewElement==undefined){
                indexForNewElement = i+1;
            }

            if(timeRecord.isGreaterThanATimeInterval(timeElementInSchedule.endHour)){
                break;
            }
        }

        if(indexForNewElement==undefined){
            indexForNewElement=this.weekSchedule[dayName].length
        }

        return indexForNewElement;
    }

    
}

module.exports=CompanySchedule;