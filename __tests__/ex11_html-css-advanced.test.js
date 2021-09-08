const { task } = require('~utils')('ex11_html-css-advanced');

describe('Ex11. HTML & CSS Advanced', () => {
    const tasks = Array.from({length: 3}).map((_, i) => `0${i + 1}`);

    tasks.forEach(t =>
        task(t, markup => {
            it('Task should exist', Boolean(markup));
        }),
    );
});
