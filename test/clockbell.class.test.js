
const { ClockBellCounter } = require("../src/clockbellcounter.class");

const fastTest = ($startTime, $endTime, output) => {
    let clockBCounter = new ClockBellCounter();
    const totalRings = clockBCounter.countBells($startTime, $endTime);
    expect(totalRings).toBe(output);
}

describe("./src/clockbellcounter.class.js", () => {
    test("INPUT $startTime = '2:00'; $endTime = '3:00'; OUTPUT 5", () => {
        fastTest("2:00", "3:00", 5);
    });

    it("INPUT $startTime = '14:00'; $endTime = '15:00'; OUTPUT 5", () => {
        fastTest("14:00", "15:00", 5);
    });

    it("INPUT $startTime = '14:23'; $endTime = '15:42'; OUTPUT 3", () => {
        fastTest("14:23", "15:42", 3);
    });

    it("IINPUT $startTime = '23:00'; $endTime = '1:00'; OUTPUT 24", () => {
        fastTest("23:00", "1:00", 24); 
    });

    it("IINPUT $startTime = '1:00'; $endTime = '1:00'; OUTPUT 157", () => {
        fastTest("1:00", "1:00", 157); 
    });

    it("IINPUT $startTime = '1:02'; $endTime = '1:01'; OUTPUT 0", () => {
        fastTest("1:02", "1:01", 156); 
    });

    it("IINPUT $startTime = '1:01'; $endTime = '1:02'; OUTPUT 0", () => {
        fastTest("1:01", "1:02", 0); 
    });

}); 