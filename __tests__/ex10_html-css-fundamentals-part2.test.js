const { task } = require('~utils')('ex10_html-css-fundamentals-part2');

describe('Ex10. HTML & CSS Fundamentals. Part 2', () => {
    const tasks = Array.from({length: 4}).map((_, i) => `0${i + 1}`);
    tasks.push('03-1', '03-2')

    tasks.forEach(t =>
        task(t, markup => {
            it('Task should exist', Boolean(markup));
        }),
    );
});
