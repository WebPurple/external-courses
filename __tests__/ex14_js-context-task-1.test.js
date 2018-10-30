const {task} = require('~utils')('ex14_js-context');

describe('Ex14. JS Context. Task 1', () => {
    task('01', code => {
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
            expect(code.fetchData).toBeDefined();
            expect(code.setState).toBeDefined();
        });

        it('should return 0 as initial state', () => expect(code.getResult()).toBe(0));

        it('should set 0 to state with #reset method', () => {
            code.add(10);
            code.reset();

            expect(code.getResult()).toBe(0);
        });

        it('should ignore updating if value isn`t provided and return value should be the same function', () => {
            const result = code.getResult();

            expect(code.add() === code).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.subtract() === code).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.divide() === code).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.multiply() === code).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.reset() === code).toBe(true);
            expect(code.getResult()).toBe(result);

            expect(code.setState() === code).toBe(true);
            expect(code.getResult()).toBe(result);
        });

        it('should add value with #add method', () => {
            code.add(1).add(1);
            expect(code.getResult()).toBe(2);
        });

        it('should subtract value with #subtract method', () => {
            code.subtract(1).subtract(1);
            expect(code.getResult()).toBe(-2);
        });

        it('should divide value with #divide method', () => {
            code.add(10);
            code.divide(2).divide(5);

            expect(code.getResult()).toBe(1);
        });

        it('should multiply value with #multiply method', () => {
            code.add(1);
            code.multiply(2).multiply(5);

            expect(code.getResult()).toBe(10);
        });

        it('should set value with #setState method', () => {
            code.setState(1);
            expect(code.getResult()).toBe(1);
        });

        it('should emulate server request with #fetchData method and call cb with value 500', () => {
            const callback = jest.fn();

            jest.useFakeTimers();
            code.fetchData(callback);
            jest.runAllTimers();

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(500);
        });
    });
});
