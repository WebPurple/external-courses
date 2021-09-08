const { task } = require('~utils')('ex8_html-css-basics');

describe('Ex8. HTML & CSS Basics', () => {
    const tasks = Array.from({length: 4}).map((_, i) => `0${i + 1}`);

    tasks.forEach(t =>
        task(t, markup => {
            console.log(markup);
            it('Task should exist', Boolean(markup));
        }),
    );
});
