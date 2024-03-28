
function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion= document.getElementById("recomendacion");

    switch (genero) {   
        case 'comedia':
            if(edad < 13){
                recomendacion.textContent= 'Bob Esponja';
            } 
                 else {

                  if(edad < 16){
                    recomendacion.textContent= 'Tiempos de Valientes';
                 }  
                 else{
                    recomendacion.textContent= 'Jackass por siempre';
                }     
            }
            break;

            case 'drama':
                if(edad < 13){
                    recomendacion.textContent= 'La razon de estar contigo';
                } 
                     else {
    
                      if(edad < 16){
                        recomendacion.textContent= 'El milagro de Tyson';
                     }  
                     else{
                        recomendacion.textContent= 'Reptiles';
                    }     
                }

            break;

            case 'musical':
                    if(edad < 13){
                        recomendacion.textContent= 'Sing: ¡Ven y canta!';
                    } 
                         else {
        
                          if(edad < 16){
                            recomendacion.textContent= 'Rebelde Way';
                         }  
                         else{
                            recomendacion.textContent= 'El amor despues del amor';
                        }     
                    }
            
                    break;


                case 'crimen':
                if(edad < 13){
                        recomendacion.textContent= 'No aptas para todo publico';
                        } 
                         else {
        
                            if(edad < 16){
                                recomendacion.textContent= 'El milagro de Tyson';
                             }  
                             else{
                                recomendacion.textContent= 'La conferencia';
                            }     
                        }
                break;
                 }
            
                }
                

