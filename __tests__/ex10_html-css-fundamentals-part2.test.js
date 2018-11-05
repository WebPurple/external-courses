const {task, css, html} = require('~utils')('ex10_html-css-fundamentals-part2', true, 'html');

describe('Ex10. HTML & CSS Fundamentals. Part 2', () => {
    const tasks = Array.from({length: 3}).map((_, i) => `0${i + 1}`);

    tasks.forEach(t =>
        task(t, markup => {
            it('html should be valid', html(markup));
            it('css should be valid', css(markup));
        }),
    );
});
