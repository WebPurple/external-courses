# Практическая работа 4 - Функции в JavaScript.

## Задание

Создать калькулятор, который может выполнять операции сложения, вычитания, деления и умножения.

```js
Calculator.add();
Calculator.subtract();
Calculator.divide();
Calculator.multiply();
```

Также калькулятор должен обладать следующими возможностями:

-   сохранять текущее состояние - _результат предыдущей операции_. Начальное значение равно **0**.

-   иметь метод для получения текущего состояния:

    ```js
    console.log(Calculator.getResult()); // 0
    ``` текущим состоянием:


-   иметь метод для сброса текущего состояния:

    ```js
    console.log(Calculator.reset()); // 0
    ```

-   все операции производятся над
    ```js
    Calculator.add(4);
    Calculator.subtract(1);

    console.log(Calculator.getResult()); // 3
    ```

-   выполнять арифметические операции также можно следующим образом:

    ```js
    console.log(Calculator.getResult()); // 0

    Calculator.add(4)(1);

    console.log(Calculator.getResult()); // 5

    Calculator.subtract(1)(1)(1)(2);

    console.log(Calculator.getResult()); // 0
    ```

-   все арифметические операции должны корректно работать в случае вызова метода без аргументов:

    ```js
    console.log(Calculator.getResult()); // 0

    Calculator.add()();

    console.log(Calculator.getResult()); // 0

    Calculator.subtract()()()();

    console.log(Calculator.getResult()); // 0
    ```


// тесты

console.log(Calculator.getResult()); // 0
Calculator.add(5);
console.log(Calculator.getResult()); // 5
Calculator.reset();
console.log(Calculator.getResult()); // 0
Calculator.add(5);
Calculator.subtract(2);
console.log(Calculator.getResult()); // 3
Calculator.subtract(3);
console.log(Calculator.getResult()); // 0
Calculator.add(3);
console.log(Calculator.getResult()); // 3
Calculator.subtract(1)(1)(1);
console.log(Calculator.getResult()); // 0
Calculator.multiply(5);
console.log(Calculator.getResult()); // 0
Calculator.add(1)(1)(1); 
console.log(Calculator.getResult()); // 3
Calculator.multiply(5)(4);
console.log(Calculator.getResult()); // 60
Calculator.divide(2);
console.log(Calculator.getResult()); // 30