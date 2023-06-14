const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll(".spans-required");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    passwordValidate();
    comparePassword();
});


function setError(index){
    campos[index].style.border = "2px solid red";
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = '0';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function passwordValidate(){
    if(campos[2].value.length < 8){
        setError(2);
    }else{
        removeError(2);
        comparePassword()
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value){
        removeError(3);
    }else{
        setError(3);
    }
}


