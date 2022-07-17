const fs = require('fs')
const Employee = require('./employee')
const DaySchedule = require('./daySchedule') 

class TxtManager{
    
    getDataFromTXT(path){

        try{

            const data = fs.readFileSync(path,'utf8')
            
            return data;

        }catch (err){
            console.log(err);
        }

    }

    deserializeDataToEmployee( employeeData ){

        let [employeeName,employeSchedule] =employeeData.split('=')
        
        employeSchedule = employeSchedule.split(',')
        
        return new Employee(employeeName,employeSchedule)
    }

    deserializeDataToDaySchedule(dayScheduleData){
        
        let dayName = dayScheduleData.substring(0,2);
        
        dayScheduleData = dayScheduleData.substring(2,dayScheduleData.length)

        let dayScheduleHours = dayScheduleData.replaceAll(':','').split('-');

        return new DaySchedule(dayName,Number(dayScheduleHours[0]),Number(dayScheduleHours[1]));
    }

    deserializeDataToDataSets(dataFromTxt){
        
        if(dataFromTxt.includes('\r')) dataFromTxt= dataFromTxt.replaceAll('\r','')

        let dataSets = dataFromTxt.split('\n\n')
        
        return dataSets;
    }

    deserializeDataToDataLines(dataSet){

        let dataLines = dataSet.split('\n')
        
        return dataLines;
    }
}

module.exports = TxtManager;