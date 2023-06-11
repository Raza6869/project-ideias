const fname = document.querySelector("input#firstname");
const sname = document.querySelector("input#secondname");
const mail = document.querySelector("input#acessmail");
const username = document.querySelector("input#username");
const password = document.querySelector("input#password");
const passwordConf = document.querySelector("input#passwordconfirm");
const avatarImg = document.querySelector("img#avatar");
const submit = document.querySelector("button.submit")

const client = {
    firstName: fname.value,
    secondName: sname.value,
    email: mail.value,
    username: username.value,
    password: password.value,
    avatar: avatarImg.value,
}

