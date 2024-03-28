function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado
}

function eventoSumar(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1+numero2)
}

function eventoRestar(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1-numero2)
}

function eventoMultiplicar(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1*numero2);
}
function eventoDivision(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1/numero2)
}

function raizCuadrada(){
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero));
}

function eventoPotenciar(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1, numero2));
}
function eventoValorAbsoluto(){
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
}

function eventoRandom(){
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo-minimo)+minimo));
}

function eventoRound(){
    let resultado = document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function eventoFloor(){
    let resultado = document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}
function eventoCeil(){
    let resultado = document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}