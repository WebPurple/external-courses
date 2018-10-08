const task = require('~utils').createTask('ex14_js-context');

describe('Ex14. JS Context. Task 2', () => {
    task('02', code => {
        beforeEach(() => {
            code.startAgain && code.startAgain('webpurple');
        });

        it('should have all expected API', () => {
            expect(code.guess).toBeDefined();
            expect(code.getStatus).toBeDefined();
            expect(code.startAgain).toBeDefined();
            expect(code.getGuessedString).toBeDefined();
            expect(code.getErrorsLeft).toBeDefined();
            expect(code.getWrongSymbols).toBeDefined();
        });

        it('should replace not guessed words by low dash', () => {
            expect(code.getGuessedString()).toBe('_________');
        });

        it('should return proper initial values', () => {            
            expect(code.getErrorsLeft()).toBe(6);
            expect(code.getWrongSymbols().length).toBe(0);
        });

        it('should show correct symbols in guessed word', () => {
            code.guess('w');
            code.guess('e');
            code.guess('p');
            expect(code.getGuessedString()).toBe('we_p__p_e');
        });

        it('should decrement errorsLeft counter if user guessed wrong letter', () => {
            code.guess('a');
            expect(code.getErrorsLeft()).toBe(5);
        });

        it('should add wrong letter to wrong symbols array', () => {
            code.guess('a');
            code.guess('k');
            expect(code.getWrongSymbols()).toEqual(['a', 'k']);
        });       
    });
});