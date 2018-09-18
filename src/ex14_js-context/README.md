# Практическая работа 14 - Контекст в JavaScript.

## Задание

Создать калькулятор с аналогичным практической работе "Функции в JavaScript" API со следующими доработками:

-   выполнять арифметические операции также можно следующим образом:

    ```js
    const result = Calculator.add(100)
        .multiply(2)
        .divide(20)
        .reset()
        .subtract(1)
        .getResult();

    console.log(result); // -1
    ```

-   у калькулятора должен быть метод для установки текущего состояния калькулятора

    ```js
    console.log(Calculator.getResult()); // 0

    Calculator.setState(1);

    console.log(Calculator.getResult()); // 1
    ```

-   у калькулятора должен быть метод, эмулирующий запрос к серверу и устанавливающий состояние калькулятора, равное **500**, при получении ответа с помощью переданного коллбека.

    ```js
    console.log(Calculator.getResult()); // 0

    Calculator.fetchData(/** callback */);

    // -- завершение асинхронной операции --

    console.log(Calculator.getResult()); // 500
    ```
