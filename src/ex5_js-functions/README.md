# Практическая работа 5 - Функции в JavaScript.

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
    ```

-   иметь метод для сброса текущего состояния:

    ```js
    console.log(Calculator.reset()); // 0
    ```

-   все операции производятся над текущим состоянием:

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
