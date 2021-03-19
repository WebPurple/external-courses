function checkALineWthinALine(string, substring) {
   const arrLetters = string.split(' ');

   for (const elem of arrLetters) {
       if (substring === elem) {
           return true;
       }
        
   } 
   
   return false;
}

module.exports = checkALineWthinALine;
