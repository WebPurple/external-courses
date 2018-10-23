'use strict'
var person = {}
person.name = 'Мария'
person.age = 21
person['Любимый вид спорта'] = 'Воздушная гимнастика'
delete person.age
console.log(person)
