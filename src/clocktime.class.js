
class ClockTime {
    constructor(clockTime){
        const [stringHours, stringMinutes] = clockTime.split(":");
        const hours = Number(stringHours);
        const minutes = Number(stringMinutes);

        this.hours = hours;
        this.minutes = minutes;

        this.isMinutesZero.bind(this);
        this.zeroMinutes.bind(this);
        this.incrementHours.bind(this);
        this.roundDownHour.bind(this);
        this.roundUpHour.bind(this);
        this.compareClockTime.bind(this);

    }
    isMinutesZero() {
        return this.minutes === 0;
    }
    zeroMinutes() {
        this.minutes = 0;
        return this;
    }
    incrementHours(hours){
        this.hours = this.hours + hours;
        return this;
    }
    roundUpHour() {
        if(this.isMinutesZero()){
            return this;
        }
        return this.zeroMinutes()
            .incrementHours(1)

    }
    roundDownHour() {
        if(this.isMinutesZero()){
            return this;
        }
        return this.zeroMinutes()
    }
    compareClockTime(aClockTime) {
        if (this.hours > aClockTime.hours) {
            return 1;
        }
        else if (this.hours === aClockTime.hours && this.minutes > aClockTime.minutes){
            return 1;
        }
        else if (this.hours === aClockTime.hours && this.minutes === aClockTime.minutes) {
            return 0;
        }
        else {
            return -1;
        }
    }
    
}

module.exports = {
    ClockTime,
}