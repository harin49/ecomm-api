 const feed = require('../controllers/feed-controller');

describe("Feed controller tests", () => {
test('should add numbers correctly', () => {
     const num1 = 2;
     const num2 = 3;
     expect(num1 + num2).toBe(5);
 });

 test('should not give a result of 6', () => {
        const num1 = 1;
        const num2 = 3;
        expect(num1 + num2).not.toBe(6);
 });
});
