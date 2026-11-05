import Botao from "./Botao";

function App(){
  return(
    <Botao mensagem={enviarMensagem} />
  )

  function enviarMensagem(){
    console.log("Mensagem enviada através do component pai.")
  }

}

export default App;
