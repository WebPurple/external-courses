const {task, css, html} = require('~utils')('ex11_html-css-advanced', true, 'html');

describe('Ex11. HTML & CSS Advanced', () => {
    const tasks = Array.from({length: 4}).map((_, i) => `0${i + 1}`);

    tasks.forEach(t =>
        task(t, markup => {
            it('html should be valid', html(markup));
            it('css should be valid', css(markup));
        }),
    );
});
