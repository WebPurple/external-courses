'use strict'
function scanDOM(){
    let fullTagList = document.querySelectorAll('*');
    let tags = {};
    let classes = {};

    fullTagList.forEach(tag => {
        if (tags[tag.tagName] !== undefined){
            tags[tag.tagName] += 1;
        } else {
            tags[tag.tagName] = 1;
        }

        tag.classList.forEach (tempClass => {
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
}


scanDOM();