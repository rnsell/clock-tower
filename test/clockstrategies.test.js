const {
    startLessThanEnd,
    startGreaterOrEqualEnd
} = require("../src/clockstrategies.js");

describe("../src/clockstrategies.js", () => {
    test("startLessThanEnd 2 to 3 should equal 5", () => {
        const totalRings = startLessThanEnd(2,3);
        expect(totalRings).toBe(2 + 3)
    });
    test("startLessThanEnd 12 to 3 should equal 18", () => {
        const totalRings = startLessThanEnd(0,3);
        expect(totalRings).toBe(12 + 1 + 2 + 3)
    });

    test("startLessThanEnd 11 to 13 should equal 24", () => {
        const totalRings = startLessThanEnd(11, 13);
        expect(totalRings).toBe(11 + 12 + 1)
    });

    test("startGreaterOrEqualEnd 23 to 1 should equal 24", () => {
        const totalRings = startGreaterOrEqualEnd(23, 1);
        expect(totalRings).toBe(11 + 12 + 1)
    })

    test("startGreaterOrEqualEnd 3 to 1 should equal 24", () => {
        const totalRings = startGreaterOrEqualEnd(3, 1);
        expect(totalRings).toBe(154)
    })



})