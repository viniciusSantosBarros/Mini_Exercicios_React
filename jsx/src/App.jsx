function App(){

  let nome = "Vinicius Santos Barros";
  const url = "https://logospng.org/download/react/logo-react-512.png";

  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <hr />
      <p>Meu nome é: {nome}</p>
      <img src={url} width={250} alt="minha imagem"/>
    </div>
  )
}

export default App;