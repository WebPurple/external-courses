const header2 = document.querySelector('.header2')
const newDiv =document.createElement("div");
newDiv.dataset.active='false'
const newUl=document.createElement('ul');
const newLi1=document.createElement('li');
const newLi2=document.createElement('li');
const newLi3=document.createElement('li');
const newA1=document.createElement('a')
const newA2=document.createElement('a')
const newA3=document.createElement('a')
newDiv.className="header2_arrow_settings";
newDiv.append(newUl);

newUl.append(newLi1)
newLi1.append(newA1)
newA1.innerText='My account'

newUl.append(newLi2)
newLi2.append(newA2)
newA2.innerText='My tasks'


newUl.append(newLi3)
newLi3.append(newA3)
newA3.innerText='Log out.'


header2.append(newDiv);

const dropDawn=document.querySelector('.header2 .header2_arrow_settings')
const arrow= document.querySelector('.arrow')
arrow.addEventListener('click',()=>{
if(dropDawn.dataset.active == 'false'){
    dropDawn.dataset.active='true'
    dropDawn.style.display="inline"
    arrow.style.transform="rotate(-224.5deg)"
}
else{
    dropDawn.dataset.active='false'
    dropDawn.style.display="none"
    arrow.style.transform="rotate(-45deg)"
}
})










