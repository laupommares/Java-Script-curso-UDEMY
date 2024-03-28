
let miArray = [8, 9, 7, 8, 3];

function listarNotas(){

    let lista = document.getElementById("listaNotas");

    for (let nota of miArray) {
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
        
}

function calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < miArray.length; i++) {
        suma += miArray[i];
    }
    let promedio = (suma/5);
    document.getElementById("promedio").textContent = promedio;
}

function notaMasAlta (){
    let = notaAlta = 0;
    let i = 0;
    while(i < 5){
        if (miArray[i] > notaAlta){
            notaAlta = miArray[i];
        }
        i++;
    }
    document.getElementById("nota").textContent= notaAlta;
}

function hayAplazo(){
    let aplazo = "No";
    let i = 0;
    do{
        if(miArray[i] < 4){
            aplazo = "Si";
            break;
        }
        i++
    }   while(i<5);
    document.getElementById("aplazos").textContent = aplazo;
}