const TxtManager = require('../src/classes/txtManager');

const DataManager = new TxtManager();

test('Get data from a txt file',()=>{
    const result = DataManager.getDataFromTXT('./inputData/input.txt').toString();

    expect(result.length).toBeGreaterThan(0)
})

test('Convert raw data in an employee object',()=>{
    const result = DataManager.deserializeDataToEmployee('RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00')

    expect(result).toEqual({firstName:'RENE',jobSchedule:['MO10:15-12:00','TU10:00-12:00','TH13:00-13:15','SA14:00-18:00','SU20:00-21:00']})
})

test('Convert raw schedule data in an schedule object',()=>{
    const result = DataManager.deserializeDataToDaySchedule('MO10:15-12:00')

    expect(result).toEqual({dayName:'MO',startHour:1015,endHour:1200})
})