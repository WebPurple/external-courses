const load = require('~loader');

describe('Ex2. JS Basics Part 2', () => {
    describe('Task 01. #stringOrNumber', () => {
        eval(load('ex2_js-basics-part2/task-01.js'));

        test("should return 'number', if parameter is number without coercion", () => {
            expect(stringOrNumber(2)).toBe('number');
            expect(stringOrNumber('2')).toBe('string');
        });

        test("should return 'string', if parameter is string", () => {
            expect(stringOrNumber('')).toBe('string');
        });

        test('should return undefined, otherwise', () => {
            expect(stringOrNumber()).toBeUndefined();
            expect(stringOrNumber(null)).toBeUndefined();
            expect(stringOrNumber(undefined)).toBeUndefined();
            expect(stringOrNumber(function() {})).toBeUndefined();
            expect(stringOrNumber([])).toBeUndefined();
            expect(stringOrNumber({})).toBeUndefined();
        });
    });

    describe('Task 02. #getArrayInfo', () => {
        eval(load('ex2_js-basics-part2/task-02.js'));

        beforeAll(() => spyOn(console, 'log'));

        const arr = [1, 2];

        test(`should be called 3 times for ${arr.toString()}`, () => {
            getArrayInfo(arr);
            expect(console.log.calls.count()).toBe(3);
        });
    });

    describe('Task 03. #countEvenAndOdds', () => {
        eval(load('ex2_js-basics-part2/task-03.js'));
        const testData = [
            [[1, 2, null], [1, 1, 0]],
            [[1, 0], [0, 1, 1]],
            [[], [0, 0, 0]]
        ];

        testData.forEach(([input, output]) =>
            test(`should return ${output.toString()} for ${input.toString()}`, () =>
                expect(countEvenAndOdds(input)).toEqual(output)),
        );
    });

    describe('Task 04. #isElementsEquals', () => {
        eval(load('ex2_js-basics-part2/task-04.js'));

        const arr1 = [1, 1];
        const arr2 = [0, 1];

        test(`should be true for ${arr1.toString()}`, () =>
            expect(isElementsEquals(arr1)).toBeTruthy());

        test(`should be false for ${arr2.toString()}`, () =>
            expect(isElementsEquals(arr2)).toBeFalsy());
    });

    describe('Task 05. #max', () => {
        eval(load('ex2_js-basics-part2/task-05.js'));

        const arr = [-100, 100, 1];

        test(`should return 100 for ${arr.toString()}`, () => expect(max(arr)).toBe(100));
    });

    describe('Task 06. #simpleOrComplexUnder1000', () => {
        eval(load('ex2_js-basics-part2/task-06.js'));

        const simple = 13;
        const complex = 14;

        test('should operate correctly with simple, complex & invalid inputs', () => {
            expect(simpleOrComplexUnder1000(simple)).toBe(`Число ${simple} - простое число`);
            expect(simpleOrComplexUnder1000(complex)).toBe(`Число ${complex} - составное число`);
            expect(simpleOrComplexUnder1000(1001)).toBe('Данные неверны');
        });
    });
});
