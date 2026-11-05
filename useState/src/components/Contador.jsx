import { useState } from "react";
import "./contador.css";

function Contador(){

    const [contador, setContador] = useState (0);

    return(
        <div>
            <h1>Contador</h1>
            
            <button onClick={()=> setContador(contador+1)} className="botao">Somar</button>
            <button onClick={()=> setContador(contador-1)} className="botao">Subtrair</button>

            <p>Contador: {contador}</p>
        </div>
    )
}

export default Contador;