// In your test setup file or at the start of your tests
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('check_api_key', () => {
        it('see if api from secrets works', () => {
            expect(process.env.API_KEY).toBe(123456);
        });

    });

    describe('add', () => {
        it('should add two positive numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('should handle negative numbers', () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });
    });

    describe('divide', () => {
        it('should divide two numbers correctly', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
        });
    });
});
