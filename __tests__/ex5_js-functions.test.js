const task = require('~utils').createTask('ex5_js-functions');

describe('Ex5. JS Functions', () => {
    task(code => {
        beforeEach(() => {
            code.reset && code.reset();
        });

        it('should have all expected API', () => {
            expect(code.add).toBeDefined();
            expect(code.subtract).toBeDefined();
            expect(code.divide).toBeDefined();
            expect(code.multiply).toBeDefined();
            expect(code.getResult).toBeDefined();
            expect(code.reset).toBeDefined();
        });

        it('should return 0 as initial state', () => expect(code.getResult()).toBe(0));

        it('should set 0 to state with #reset method', () => {
            code.add(10);
            code.reset();

            expect(code.getResult()).toBe(0);
        });

        it('should ignore updating if value isn`t provided and return value should be the same function', () => {
            const result = code.getResult();

            expect(code.add() === code.add).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.subtract() === code.subtract).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.divide() === code.divide).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.multiply() === code.multiply).toBe(true);
            expect(code.getResult()).toBe(result);
        });

        it('should add value with #add method', () => {
            code.add(1)(1);
            expect(code.getResult()).toBe(2);
        });

        it('should subtract value with #subtract method', () => {
            code.subtract(1)(1);
            expect(code.getResult()).toBe(-2);
        });

        it('should divide value with #divide method', () => {
            code.add(10);
            code.divide(2)(5);

            expect(code.getResult()).toBe(1);
        });

        it('should multiply value with #multiply method', () => {
            code.add(1);
            code.multiply(2)(5);

            expect(code.getResult()).toBe(10);
        });
    });
});
