const { task } = require('~utils')('ex9_html-css-fundamentals-part1');

describe('Ex9. HTML & CSS Fundamentals. Part 1', () => {
    const tasks = ['03', '04', 'flex', 'grid'];

    tasks.forEach(t =>
        task(t, markup => {
            it('Task should exist', Boolean(markup));
        }),
    );
});
