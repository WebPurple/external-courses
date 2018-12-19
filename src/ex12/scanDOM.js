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



var nodelist = {'textnode': 0};
var classlist = {};

function scanDOMRecursive(node){

    //элемент
    if (node.nodeType === 1){ 

        if (nodelist[node.tagName] === undefined) {
            nodelist[node.tagName] = 0;
        }

        nodelist[node.tagName] += 1;
        
        node.classList.forEach(element => {
            if (classlist[element] === undefined) {
                classlist[element] = 0;
            }

            classlist[element] += 1;
        });

        node.childNodes.forEach(element => {
            scanDOMRecursive(element)
        });
    //текстовая нода
    } else if (node.nodeType === 3){

        nodelist.textnode += 1;

    }
    
    if (node.tagName === "HTML") {
        console.log("Элементы_______________");
        Object.keys(nodelist).forEach(element => {
            console.log("Элементов " + element + " - " + nodelist[element]);
        });

        console.log("Классы_________________");
        Object.keys(classlist).forEach(element => {
            console.log("Элементов класса " + element + " - " + classlist[element]);
        });
    }
}


// scanDOM();
scanDOMRecursive(document.getElementsByTagName("HTML")[0]);
