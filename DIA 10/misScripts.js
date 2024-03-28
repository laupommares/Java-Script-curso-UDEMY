class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
}

Animal.prototype.informacion = function(){
  return `${this.nombre} - ${this.peso} kg. - ${this.edad}`
}

function infoAnimales(){
    let lista = document.getElementById("listaAnimales");

   for (let animal of animales){
    let item = document.createElement("li");
    item.innerText = animal.informacion();
    lista.appendChild(item);
   }

}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion (){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} - ${this.raza}`
    }
}


class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion (){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} - ${this.sexo}`
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion (){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} - ${this.color}`
    }
}

let perro1 = new Perro ("Uma", 10, "18 años", "cruza");
let gato1 = new Gato("Ciro", 5, "9 años", "stog");
let conejo1 = new Conejo("Pedro", 2, "1 año", "blanco");

let animales = [perro1, gato1, conejo1];