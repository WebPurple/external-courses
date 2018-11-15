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
        // console.log(tag.classList);
        tag.classList.forEach (tempClass => {
           
            if (classes[tempClass] !== undefined){
                classes[tempClass] += 1;
            } else {
                classes[tempClass] = 1;
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


var tags = {};
var classes = {};


function scanDOMRecursive(elem){
    
    let element = elem;
    
    if (elem === undefined){
        element = document.getElementsByTagName('html')[0];
        
    }
    
    if (tags[element.tagName] !== undefined){
        tags[element.tagName] += 1;
    } else {
        tags[element.tagName] = 1;
    }
    
    element.classList.forEach (tempClass => {
        if (classes[tempClass] !== undefined){
            classes[tempClass] += 1;
        } else {
            classes[tempClass] = 1;
        }
    });
    let children = element.children;
    
    for (let i = 0; i < children.length; i++){
        scanDOMRecursive(children[i]);
    } 
    
    if (element.tagName === 'HTML'){
        console.log('Тэги: ')
        Object.keys(tags).forEach( key =>{
            console.log('Тэгов ' + key + ": " + tags[key]);
        });

        console.log('Классы: ')
        Object.keys(classes).forEach( key =>{
            console.log('Элементов класса  ' + key + ": " + classes[key]);
        });
    }
}



// scanDOM();
scanDOMRecursive();
