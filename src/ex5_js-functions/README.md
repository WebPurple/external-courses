# Практическая работа 5 - Функции в JavaScript.

## Задание

Создать функцию калькулятор `Calculator`, который может выполнять операции сложения, вычитания, деления и умножения, используя замыкания (не используя контекст `this`).

```js
const calculator = Calculator();

calculator.add();
calculator.subtract();
calculator.divide();
calculator.multiply();

module.exports = calculator;
```

Также калькулятор должен обладать следующими возможностями:

-   сохранять текущее состояние - _результат предыдущей операции_. Начальное значение равно **0**.

-   иметь метод для получения текущего состояния:

    ```js
    console.log(calculator.getResult()); // 0
    ```

-   иметь метод для сброса текущего состояния:

    ```js
    console.log(calculator.reset()); // 0
    ```

-   все операции производятся над текущим состоянием:

    ```js
    calculator.add(4);
    calculator.subtract(1);

    console.log(calculator.getResult()); // 3
    ```

-   выполнять арифметические операции также можно следующим образом:

    ```js
    console.log(calculator.getResult()); // 0

    calculator.add(4)(1);

    console.log(calculator.getResult()); // 5

    calculator.subtract(1)(1)(1)(2);

    console.log(calculator.getResult()); // 0
    ```

-   все арифметические операции должны корректно работать в случае вызова метода без аргументов:

    ```js
    console.log(calculator.getResult()); // 0

    calculator.add()();

    console.log(calculator.getResult()); // 0

    calculator.subtract()()()();

    console.log(calculator.getResult()); // 0
    ```


####Критерии оценки: 
- 0 - задание не выполнено
- 1 - создана функция `Calculator`, которая возвращает объект с методами `add, subtract, divide, multiply, getResult, reset`, но состояние между операциями не сохраняется
- 2 - `+` текущее состояние сохраняется
- 3 - `+` имеется возможность вызывать функции таким образом: `calculator.subtract(1)(1)(1)(2)`
- 4 - `+` операции корректно работают в случае вызова метода без аргументов `calculator.subtract()()()()`
- 5 - `+` успешно пройдены тесты и линтеры, исправлены комментарии тренера, если имеются