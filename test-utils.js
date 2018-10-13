const validateHTML = require('html-validator');
const validateCSS = require('css-validator');
const {readFileSync} = require('fs');

module.exports = (exerciseName, read = false, taskExt = 'js') => {
    const dirWithTask = `${__dirname}/src/${exerciseName}`;

    return {
        task: (number, cb) => {
            const oneParam = typeof number === 'function';
            const taskCb = oneParam ? number : cb;
            const taskNo = oneParam ? '' : number;

            const pathToTask = `${dirWithTask}/task${taskNo ? `-${taskNo}` : taskNo}.${taskExt}`;
            const moduleExport = read ? readCode(pathToTask) : softRequire(pathToTask);

            const conditionalDescribe = moduleExport ? describe : xdescribe;
            conditionalDescribe(`Task ${taskNo}`, () => taskCb(moduleExport));
        },
        html: markup => done => {
            validateHTML({data: markup, format: 'json'})
                .then(({messages}) => {
                    const errors = messages.filter(m => m.type === 'error');

                    if (errors.length) {
                        const report = `\n${errors
                            .map((e, i) => `${i + 1}. ${e.message}`)
                            .join('\n')}`;
                        return done.fail(report);
                    }

                    return done();
                })
                .catch(({message}) => {
                    console.warn(`Internet connection error: ${message}`);
                    return done();
                });
        },
        css: markup => done => {
            const compressedHTML = markup.replace(/\s/g, ' ');
            const styleTag = findStringBetween(compressedHTML, '<style>', '</style>')[0] || '';
            const linkHrefs = findStringBetween(compressedHTML, 'href=("|\')', '("|\')>');

            const bundle = [
                styleTag,
                ...linkHrefs.map(href => readFileSync(`${dirWithTask}/${href}`, 'utf-8')),
            ].join('');

            validateCSS({text: bundle}, (error, res) => {
                if (error) {
                    console.warn(`Internet connection error: ${error.message}`);
                    return done();
                }

                const {errors = []} = res;

                if (errors.length) {
                    const report = `\n${errors
                        .map((e, i) => `${i + 1}. ${e.message} in \n ${e.context}`)
                        .join('')
                        .replace(/\s+/g, ' ')}`;
                    return done.fail(report);
                }

                return done();
            });
        },
    };
};

const findStringBetween = (str, first, last) => {
    const matched = str.match(new RegExp(first + '(.*?)' + last, 'gm'));
    if (matched) {
        return matched.map(s => s.replace(new RegExp(first), '').replace(new RegExp(last), ''));
    }
    return [];
};

const readCode = absolutePath => {
    try {
        return readFileSync(absolutePath).toString();
    } catch (err) {
        return null;
    }
};

const softRequire = modulePath => {
    try {
        return require(modulePath);
    } catch (err) {
        return null;
    }
};
