var str = "Шок, вы не поверите, новым преемником Путина стал 404 error not found"
var maxlength = 52;


function truncate() {
    if (str.length > maxlength) {
        console.log(str.slice(0, maxlength - 3) + '...');
      }
  }

  truncate(str, maxlength);

