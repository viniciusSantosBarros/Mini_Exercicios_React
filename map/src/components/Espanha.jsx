function Espanha({laLiga}){
    
    return(
        <>
        <h1>Clubes Espanha:</h1>

        {laLiga.map((clube, index) =>(
            <p key={index}>{clube}</p>
        ))}
        </>
    )
}

export default Espanha;