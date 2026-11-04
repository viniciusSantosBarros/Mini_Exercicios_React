function Event(){

    function enviarFormulario(){
        console.log("Dados enviados com sucesso!")
    }

    return(
        <>
        <p>Nome: <input type="text" placeholder="Digite o seu nome"/> <button onClick={enviarFormulario}>Enviar</button></p>
        </>
    )
}

export default Event;