
const { ClockTime } = require("../src/clocktime.class");
const FOURTEEN_TWENTY_THREE = "14:23"
describe("./src/clocktime.class.js", () => {
    test("test 14:23 should generate hours 14 and minutes 23", () => {
        const clocktime = new ClockTime(FOURTEEN_TWENTY_THREE);
        expect(clocktime.hours).toBe(14);
        expect(clocktime.minutes).toBe(23);
    })

    test("test 14:23 roundown should be 14:00", () => {
        const clocktime = new ClockTime(FOURTEEN_TWENTY_THREE);
        clocktime.roundDownHour();
        expect(clocktime.hours).toBe(14);
        expect(clocktime.minutes).toBe(0);
    })


    test("test 14:23 roundup should be 15:00", () => {
        const clocktime = new ClockTime(FOURTEEN_TWENTY_THREE);
        expect(clocktime.isMinutesZero()).toBe(false);
        clocktime.roundUpHour();
        expect(clocktime.hours).toBe(15);
        expect(clocktime.minutes).toBe(0);
    })

    test("test 14:00 rounddown should be 14:00", () => {
        const clocktime = new ClockTime("14:00");
        clocktime.roundDownHour();
        expect(clocktime.hours).toBe(14);
        expect(clocktime.minutes).toBe(0);
    })

    test("test 14:00 roundup should be 14:00", () => {
        const clocktime = new ClockTime("14:00");
        clocktime.roundUpHour();
        expect(clocktime.hours).toBe(14);
        expect(clocktime.minutes).toBe(0);
    })


    test("1:00 compared to 2:00 should return -1", () => {
        const clocktime1 = new ClockTime("1:00");
        const clocktime2 = new ClockTime("2:00");
        expect(clocktime1.compareClockTime(clocktime2)).toBe(-1);
    })


    test("2:00 compared to 1:00 should return 1", () => {
        const clocktime1 = new ClockTime("2:00");
        const clocktime2 = new ClockTime("1:00");
        expect(clocktime1.compareClockTime(clocktime2)).toBe(1);
    })


    test("test 2:02 compared to 2:00 should return 1", () => {
        const clocktime1 = new ClockTime("2:02");
        const clocktime2 = new ClockTime("2:00");
        expect(clocktime1.compareClockTime(clocktime2)).toBe(1);
    })

    test("test 2:00 compared to 2:00 should return 0", () => {
        const clocktime1 = new ClockTime("2:00");
        const clocktime2 = new ClockTime("2:00");
        expect(clocktime1.compareClockTime(clocktime2)).toBe(0);
    })





    // test("Should validate 24:00 as an invalid valid time", () => {
    // })


}); 

