function elem(str, el) {

    var s = 0
    var num = str.indexOf(el);
    while (num != -1) {
        s++
        num = str.indexOf(el, num + 1)
    }


    return s
}
var str = 'Hello world';
var el = 'l';
console.log(elem(str, el))