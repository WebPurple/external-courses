const {task} = require('~utils')('ex2_js-basics-part2');

describe('Ex2. JS Basics Part 2', () => {
    task('01', code => {
        it("should return 'number', if parameter is number without coercion", () => {
            expect(code(2)).toBe('number');
            expect(code('2')).toBe('string');
        });

        it("should return 'string', if parameter is string", () => {
            expect(code('')).toBe('string');
        });

        it('should return undefined, otherwise', () => {
            expect(code()).toBeUndefined();
            expect(code(null)).toBeUndefined();
            expect(code(undefined)).toBeUndefined();
            expect(code(function() {})).toBeUndefined();
            expect(code([])).toBeUndefined();
            expect(code({})).toBeUndefined();
        });
    });

    task('02', code => {
        beforeAll(() => spyOn(console, 'log'));

        const arr = [1, 2];

        it(`should be called 3 times for ${arr.toString()}`, () => {
            code(arr);
            expect(console.log.calls.count()).toBe(3);
        });
    });

    task('03', code => {
        const testData = [
            [[1, 2, null], [1, 1, 0]],
            [[1, 0], [0, 1, 1]],
            [[], [0, 0, 0]]
        ];

        testData.forEach(([input, output]) =>
            it(`should return ${output.toString()} for ${input.toString()}`, () =>
                expect(code(input)).toEqual(output)),
        );
    });

    task('04', code => {
        const arr1 = [1, 1];
        it(`should be 'true' for ${arr1.toString()}`, () => expect(code(arr1)).toBe(true));

        const arr2 = [0, 1];
        it(`should be 'false' for ${arr2.toString()}`, () => expect(code(arr2)).toBe(false));
    });

    task('05', code => {
        const arr = [-100, 100, 1];
        it(`should return 100 for ${arr.toString()}`, () => expect(code(arr)).toBe(100));
    });

    task('06', code => {
        const simple = 13;
        const complex = 14;

        it('should operate correctly with simple, complex & invalid inputs', () => {
            expect(code(simple)).toBe(`Число ${simple} - простое число`);
            expect(code(complex)).toBe(`Число ${complex} - составное число`);
            expect(code(1001)).toBe('Данные неверны');
        });
    });
});
