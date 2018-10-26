const {task} = require('~utils')('ex1_js-basics-part1', true);

describe('Ex1. JS Basics Part 1', () => {
    task('01', codeAsStr => {
        eval(codeAsStr);
        it('x should be 10', () => expect(x).toBe(10));
    });
});
