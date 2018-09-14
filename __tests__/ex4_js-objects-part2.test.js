const task = require('~utils').createTask('ex4_js-objects-part2');

describe('Ex4. JS Objects Part 2', () => {
    describe('Prototypes', () => {
        task('01', code => {
            const obj = Object.create({a: 1});
            obj.b = 2;

            test('should find prop only in prototype', () => {
                expect(code('a', obj)).toBe(1);
                expect(code('b', obj)).toBeUndefined();
            });
        });

        task('02', code =>
            test('should create object without prototype', () =>
                expect(Object.getPrototypeOf(code())).toBeNull()),
        );
    });

    describe('Strings', () => {
        task('03', code =>
            test('should remove first and last spaces from string', () =>
                expect(code(' abc ')).toBe('abc')),
        );

        task('04', code =>
            test('should capitalize input string', () => expect(code('abc')).toBe('Abc')),
        );

        task('05', code => {
            test('should return `true` if substring was founded', () => {
                expect(code('I love cats', 'cats')).toBe(true);
                expect(code('', 'cats')).toBe(false);
            });
        });

        task('06', code =>
            test('should camelize input string', () => expect(code('I am cool')).toBe('I Am Cool')),
        );

        task('07', code =>
            test('should add ellipsis to string if length more than specified number', () =>
                expect(code('abcdefg', 5)).toBe('ab…')),
        );

        task('08', code =>
            test('should lowerCamelCase input string', () =>
                expect(code('User Object', 5)).toBe('userObject')),
        );

        task('09', code =>
            test('should insert substring after the word at specified position', () =>
                expect(code('I am cool', 'very', 1)).toBe('I am very cool')),
        );

        task('10', code => test('should reverse string', () => expect(code('abc')).toBe('cba')));

        task('11', code => {
            beforeAll(() => spyOn(console, 'log'));

            code('abbac');

            test('should count each word count of entrance', () =>
                expect(console.log.calls.count()).toBe(3));
        });
    });

    describe('Numbers', () => {
        task('12', code =>
            test('should sum and round to three', () => expect(code(3.455, 4.55)).toBe(8.005)),
        );

        task('13', code => {
            test('should return random number in [0; 100]', () => {
                const tries = [code(), code()];

                expect(tries[0]).not.toBe(tries[1]);

                tries.forEach(t => {
                    expect(t).toBeGreaterThanOrEqual(0);
                    expect(t).toBeLessThanOrEqual(100);
                });
            });
        });

        task('14', code => {
            test('should return random int in [min, max]', () => {
                const tries = Array.from({length: 10}).map(() => code(1, 5));

                tries.forEach(t => {
                    expect(t).toBeGreaterThanOrEqual(1);
                    expect(t).toBeLessThanOrEqual(5);
                });
            });
        });
    });
});
