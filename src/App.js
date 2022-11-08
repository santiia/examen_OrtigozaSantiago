import React, { useState } from 'react'
import Posteos from "./components/Posteos"
import Estatus from "./components/Estatus"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes. HECHO 
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post. HECHO 
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado. HECHO

function App() {
  
  const [posteos, setPosteos] = useState(0);

  const totalLikes = () => {
      setPosteos(posteos+1);
  }

  return (
    <div className="App">
      <Estatus posteos={posteos}/>
      <Posteos totalLikes={totalLikes}/>
    </div>
  );
}

export default App;
