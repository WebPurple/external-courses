'use strict'
let a = document.querySelectorAll('*');
let tags = {};
let classes = {};

a.forEach(element => {
    if (tags[element.tagName] !== undefined){
        tags[element.tagName] += 1;
    } else {
        tags[element.tagName] = 1;
    }

    element.classList.forEach (tempClass => {
        if (tempClass !== ''){
             if (classes[tempClass] !== undefined){
                 classes[tempClass] += 1;
             } else {
                 classes[tempClass] = 1;
             }
         }
    });
});

console.log('Тэги: ')
Object.keys(tags).forEach( key =>{
    console.log('Тэгов ' + key + ": " + tags[key]);
});

console.log('Классы: ')
Object.keys(classes).forEach( key =>{
    console.log('Элементов класса  ' + key + ": " + classes[key]);
});

