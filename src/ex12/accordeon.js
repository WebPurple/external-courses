'use strict'

function handler(event){

    let target = event.target;
    if (target.tagName === 'H3'){
        target = target.nextElementSibling;
        document.getElementsByClassName('active')[0].classList.remove('active');
        target.classList.add('active');    
    }
    
};