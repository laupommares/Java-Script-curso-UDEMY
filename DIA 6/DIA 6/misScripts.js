function multiplicar(){

  //Obtener el numero
    let elementoTextoTabla= document.getElementById("textoTabla");
    let textoNumeroTabla= elementoTextoTabla.value;
    let numerotabla = Number(textoNumeroTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for (let x = 1; x <= 10; x++) {
        //Calcular el rtesultado
        let numeroResultado = numerotabla * x;

        //Armar string con resultado
        let textoResultado = numerotabla + " por " + x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);

        
    }

}