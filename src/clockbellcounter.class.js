const { ClockTime } = require("./clocktime.class");

const {     
    startLessThanEnd,
    startGreaterOrEqualEnd
} = require("./clockstrategies");

class ClockBellCounter{
    constructor(){
        // This is a strategy map for the calculation that needs done
        // While this could be expressed as an if else its easier to modify this pattern later for additional calculations
        // Additionally this could be passed in for different clockcounter algorithms later on
        this.countBellsStrategyMap = new Map();
        this.countBellsStrategyMap.set(-1, startLessThanEnd)
        this.countBellsStrategyMap.set(0, startGreaterOrEqualEnd)
        this.countBellsStrategyMap.set(1, startGreaterOrEqualEnd)
        this.countBells.bind(this);
    }

    countBells($startTime, $endTime) {
        const startClockTime = new ClockTime($startTime);
        const endClockTime = new ClockTime($endTime);
        const compareTimes = startClockTime.compareClockTime(endClockTime);
        startClockTime.roundUpHour();
        endClockTime.roundDownHour();
        const calculationStrategy = this.countBellsStrategyMap.get(compareTimes);
        return calculationStrategy(startClockTime.hours, endClockTime.hours)
    }


}

module.exports = {
    ClockBellCounter
}