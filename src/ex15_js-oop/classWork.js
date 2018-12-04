class Shape {
    getSquare () {
        return('area is not defined');
    }
}
class Square extends Shape {
   getSquare (a,b) {
       this.a = a;
       this.b = b;
       this.square = this.a*this.b;
       return ('Площадь прямоугольника:'+ this.square);
   } 
}
class Triangle extends Shape {
    getSquare (a, h) {
        this.a = a;
        this.h=h;
        this.square=this.a/2*this.h;
        return ('Площадь треугольника:' + this.square);
    }
}
var mySquare = new Triangle ();
console.log(mySquare.getSquare(6,5));