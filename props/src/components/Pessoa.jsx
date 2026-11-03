
function Pessoa({nome, idade, cidade, profissao}){
    return(
        <div>
            <p>Nome: {nome ? nome : "Não Consta"}</p>
            <p>Idade: {idade ? idade : "Não Consta"}</p>
            <p>Cidade: {cidade ? cidade : "Não Consta"}</p>
            <p>Profissão: {profissao ? profissao : "Não Consta"}</p>
            <hr />
        </div>
    )
}

export default Pessoa;