

function insert(num){    
    
    let numero = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = numero + num;
}

function back(){

    let resultado = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1)
}

function clean(){

    document.querySelector('#result').innerHTML=""
}

function calcular(){

    var resultado = document.querySelector('#result').innerHTML;
    if(resultado){
        document.querySelector('#result').innerHTML = eval(resultado)
    }
}