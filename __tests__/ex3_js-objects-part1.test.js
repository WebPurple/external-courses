const {task} = require('~utils')('ex3_js-objects-part1');

describe('Ex3. JS Objects Part 1', () => {
    task('02', code => {
        beforeAll(() => spyOn(console, 'log'));

        const obj = {a: 1};

        it("should be called once for 'obj' object", () => {
            code(obj);
            expect(console.log.calls.count()).toBe(1);
        });
    });

    task('03', code => {
        const obj = {a: 1};
        const objWithProto = Object.create({ c: 3 });

        it("should return 'true' if key exists in object", () =>
            expect(code('a', obj)).toBe(true));

        it("should return 'false' if key not exists in object", () =>
            expect(code('b', obj)).toBe(false));

        it("should return 'false' if key not exists in object", () =>
            expect(code('c', objWithProto)).toBe(false));
    });

    task('04', code => {
        const obj = {a: 1};
        const objWithProto = Object.create({ b: 3 });

        it('should leave property unchanged if it exists', () => {
            const newObj = code('a', obj);
            expect(newObj.a).toBe(1);
        });

        it("should set 'new' to property if it doesn't exist", () => {            
            const newObj = code('b', obj);
            expect(newObj.b).toBe('new');
        });

        it("should set 'new' to property if it doesn't exist", () => {            
            const newObj = code('b', objWithProto);
            expect(newObj.b).toBe('new');
        });
    });

    task('05', code => {
        const obj = {a: 1};

        it('should create object with own new reference', () => {
            expect(obj === code(obj)).toBeFalsy();
        });
    });

    task('06', code => {
        const obj = {
            a: 1,
            b: {
                c: 7,
                v: {
                    b: 'awf',
                },
            },
        };

        it("should return undefined if the pass is invalid", () =>
            expect(code(obj, 'a.c')).toBe(undefined));

        it("should return undefined if the pass is invalid", () =>
            expect(code(obj, 'a.b.c.b')).toBe(false));

        it("should return value if the pass valid", () =>
            expect(code(obj, 'a.b.v.b')).toBe('awf'));
    });

    task('07', code => {
        const obj = {a: 1, b: {c: 0}, e: {f: [{g: 1}]}};
        const objCopy = code(obj);

        it('should create object with new references for non-primitive values', () => {
            expect(obj === objCopy).toBeFalsy();
            expect(obj.b === objCopy.b).toBeFalsy();
            expect(obj.e === objCopy.e).toBeFalsy();
            expect(obj.e.f === objCopy.e.f).toBeFalsy();
        });

        it('should copy all properties', () => {
            expect(objCopy).toEqual(obj);
        });
    });
});
