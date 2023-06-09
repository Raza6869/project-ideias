const username = document.querySelector('.username input');
const password = document.querySelector('.password input');
const showbtn = document.querySelector('.password i');

function showHide() {
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
    }else{
        password.setAttribute('type', 'password');
    }
}