class TimeRecord{
    
    employeeName;
    startHour;
    endHour;

    constructor(
        employeeName,
        startHour,
        endHour,
    ){
        this.employeeName=employeeName;
        this.startHour=startHour;
        this.endHour=endHour;
    }

    areInTheSameTimeFrame(startIntervalTime,endIntervalTime){
        if(startIntervalTime<this.startHour&&endIntervalTime>this.endHour) return true;
        
        if(startIntervalTime>this.startHour&&endIntervalTime<this.endHour) return true;
        
        if((startIntervalTime>=this.startHour&&endIntervalTime>=this.endHour&&startIntervalTime<this.endHour)) return true;

        if((startIntervalTime<=this.startHour&&endIntervalTime<=this.endHour&& endIntervalTime>this.startHour)) return true;

        return false;
    }

    isGreaterThanATimeInterval(endIntervalTime){
        if(endIntervalTime<this.startHour) return true;

        return false;
    }


}

module.exports= TimeRecord;