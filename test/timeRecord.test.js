const TimeRecord = require('../src/classes/timeRecord')



test('Check if two time intervals are in the same time frame',()=>{
    
    let exampleOne = new TimeRecord('JUAN',1000,1200)
    
    const resultOne = exampleOne.areInTheSameTimeFrame(1000,1500);
    const resultTwo = exampleOne.areInTheSameTimeFrame(900,1200);
    const resultThree = exampleOne.areInTheSameTimeFrame(900,1300);
    const resultFour = exampleOne.areInTheSameTimeFrame(700,900);

    expect(resultOne).toBe(true);
    expect(resultTwo).toBe(true);
    expect(resultThree).toBe(true);
    expect(resultFour).toBe(false);
})

test('Check if a time interval is less than other',()=>{
    let example = new TimeRecord('JUAN',1000,1200)

    const resultOne = example.isGreaterThanATimeInterval(900)
    const resultTwo = example.isGreaterThanATimeInterval(1000)
    const resultThree = example.isGreaterThanATimeInterval(1100)

    expect(resultOne).toBe(true);
    expect(resultTwo).toBe(false);
    expect(resultThree).toBe(false);
})