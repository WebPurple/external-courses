/*
EPAM PracticWork #3 task-01
Remizov Maxim, 2019

Создать пустой объект. Добавить несколько свойств со значениями разных типов. Удалить одно из созданных свойств.
*/
var myObject = {};
myObject.prop1 = "val1";
myObject.prop2 = 2;
myObject.prop3 = true;
delete myObject.prop3;