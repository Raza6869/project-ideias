const addButton = document.querySelector('input#addinput');
const addLabel = document.querySelector('label#addlabel');
const att = document.querySelector('section.attachment');
let toogle = 1;

addLabel.addEventListener('click', () =>{
    toogle++;

    if(toogle > 1){
        toogle = 0;
    }

    if(toogle == 1){
        att.classList.add('hide');
    }else if(toogle == 0){
        att.classList.remove('hide')
    }
});





