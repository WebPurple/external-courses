const {task, css, html} = require('~utils')('ex9_html-css-fundamentals-part1', true, 'html');

describe('Ex9. HTML & CSS Fundamentals. Part 1', () => {
    const tasks = ['03', '04', '05'];

    tasks.forEach(t =>
        task(t, markup => {
            it('html should be valid', html(markup));
            it('css should be valid', css(markup));
        }),
    );
});
