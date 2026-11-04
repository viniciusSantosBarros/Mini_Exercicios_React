import Carros from "./components/Concessionaria";

function App(){
  return(
    <div>
      <h1>Concessionária</h1>
      <Carros marca="Fiat" ano={1998} placa="ABCD-123"/>
      <Carros marca="Ferrari" ano={2009} placa="EFGH-456"/>
      <Carros/>
    </div>
  )
}

export default App;