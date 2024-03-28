
function Automovil (marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo; 
    this.color = color; 
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil ("Ford", "Focus", "Blanco", 2008, "Roberto Mansilla");

let automovil2 = new Automovil ("Volswagen", "Gol Trend", "Negro", 2009, "Maria Rosa Perez");

let automovil3 = new Automovil ("Fiat", "Palio", "Gris", 2007, "Susana Rodriguez");

let automoviles = [automovil1, automovil2, automovil3];

/* let informacion = document.createElement("li"); */


/* 
lista.appendChild("li");
 */ 

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.enceder = function(){
    alert("El automovil esta en marcha");
}

Automovil.prototype.verAuto = function(){
    return `${this.marca} ${this.marca} - ${this.anio} - ${this.titular}`
}


function mostrarAutomoviles(){ 

    let lista = document.getElementById("listaAutomoviles");

    for (let automovil of automoviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAuto();
        lista.appendChild(item); 
    }
}