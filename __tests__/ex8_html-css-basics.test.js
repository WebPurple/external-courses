const {task, css, html} = require('~utils')('ex8_html-css-basics', true, 'html');

describe('Ex8. HTML & CSS Basics', () => {
    const tasks = Array.from({length: 4}).map((_, i) => `0${i + 1}`);

    tasks.forEach(t =>
        task(t, markup => {
            it('html should be valid', html(markup));
            it('css should be valid', css(markup));
        }),
    );
});
