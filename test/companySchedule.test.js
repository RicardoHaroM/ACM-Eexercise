const CompanySchedule = require('../src/classes/companySchedule');
const TimeRecord = require('../src/classes/timeRecord')

let exampleSchedule = new CompanySchedule();

test('Insert a new time record',()=>{

    exampleSchedule.addTimeRecordInSchedule({dayName:'Mo',startHour:1000,endHour:1200},'Juan')

    expect(exampleSchedule.weekSchedule.hasOwnProperty('Mo')).toBe(true);

})

test('Compare time record with all the time records and return the position to the new record',()=>{
    
    let timeRecord= new TimeRecord('Pedro',1300,1500)

    const result = exampleSchedule.compareRecordsInTheSameInterval('Mo',timeRecord)

    expect(result).toBe(1);
})