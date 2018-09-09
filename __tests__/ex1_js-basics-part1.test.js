describe('Ex1. JS Basics Part 1', () => {
    describe('Task 01. Variable assignment', () => {
        eval(require('~loader')('ex1_js-basics-part1/task-01.js'));

        test('x should be 10', () => expect(x).toBe(10));
    });
});
