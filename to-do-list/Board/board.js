const addButton = document.querySelector('input#addinput');
const addLabel = document.querySelector('label#addlabel');
const att = document.querySelector('section.attachment');
let toogleadd = 1;

addLabel.addEventListener('click', () =>{
    toogleadd++;

    if(toogleadd > 1){
        toogleadd = 0;
    }

    if(toogleadd == 1){
        att.classList.add('hide');
    }else if(toogleadd == 0){
        att.classList.remove('hide')
    }
});

//Weekday of Attachment Box
const weekDay = document.querySelectorAll('#weekday');
const weekLabel = document.querySelectorAll('.weekday label')
//Weekday of Board box
const weekBox = document.querySelectorAll('#weekday-box');
//days
let sunatt = document.querySelector('#weekday #sunday')



