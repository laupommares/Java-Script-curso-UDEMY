import React from "react";
import Saludo from "./Saludo";
import Mensaje from "./Mensaje";

function App(){
  return(
    <div>
      <Saludo nombre="Juan"/>
      <Mensaje mensaje="Bienvenido a mi aplicacion React"/>
    </div>
  )
}

export default App;