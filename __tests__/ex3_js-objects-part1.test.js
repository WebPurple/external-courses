const load = require('~loader');

describe('Ex3. JS Objects Part 1', () => {
    describe('Task 01', () => {});

    describe('Task 02. #logAllKeyValuePairs', () => {
        eval(load('ex3_js-objects-part1/task-02.js'));

        beforeAll(() => spyOn(console, 'log'));

        const obj = {a: 1};

        test("should be called once for 'obj' object", () => {
            logAllKeyValuePairs(obj);
            expect(console.log.calls.count()).toBe(1);
        });
    });

    describe('Task 03. #hasProperty', () => {
        eval(load('ex3_js-objects-part1/task-03.js'));

        const obj = {a: 1};

        test("should return 'true' if key exists in object", () =>
            expect(hasProperty('a', obj)).toBeTruthy());

        test("should return 'false' if key not exists in object", () =>
            expect(hasProperty('b', obj)).toBeFalsy());
    });

    describe('Task 04. #setNonExistedProperty', () => {
        eval(load('ex3_js-objects-part1/task-04.js'));

        const obj = {a: 1};

        test('should leave property unchanged if it exists', () => {
            setNonExistedProperty('a', obj);
            expect(obj.a).toBe(1);
        });

        test("should set 'new' to property if it doesn't exist", () => {
            setNonExistedProperty('b', obj);
            expect(obj.b).toBe('new');
        });
    });

    describe('Task 05. #clone', () => {
        eval(load('ex3_js-objects-part1/task-05.js'));

        const obj = {a: 1};

        test('should return the same reference after cloning', () => {
            expect(obj === clone(obj)).toBeFalsy();
        });
    });

    describe('Task 06. #cloneDeep', () => {
        eval(load('ex3_js-objects-part1/task-06.js'));

        const obj = {a: 1, b: {c: 0}, e: {f: [{g: 1}]}};
        const objCopy = cloneDeep(obj);

        test('should create object with new references for non-primitive values', () => {
            expect(obj === objCopy).toBeFalsy();
            expect(obj.b === objCopy.b).toBeFalsy();
            expect(obj.e === objCopy.e).toBeFalsy();
            expect(obj.e.f === objCopy.e.f).toBeFalsy();
        });

        test('should copy all properties', () => {
            expect(obj).toEqual(objCopy);
        });
    });
});
