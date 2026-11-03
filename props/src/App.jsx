import Pessoa from "./components/Pessoa";

function App(){
  return(
    <div>
      <h1>Dados Pessoais:</h1>
      <Pessoa nome="Vinicius Santos" idade="28" cidade="Santo André" profissao="Desenvolvedor de Software"/>
      <Pessoa nome="Danilo Barros" idade="30" cidade="Vitória da Conquista" profissao="Médico"/>
      <Pessoa nome="Milena Tomaz" idade="18" cidade="Minas Gerais" profissao="Arquiteta"/>
      <Pessoa/>
    </div>
  )
}

export default App;