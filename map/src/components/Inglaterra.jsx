function Inglaterra({premierLeague}){

    return(
        <>
        <h1>Clubes Inglaterra:</h1>

        {premierLeague.map((clube, index) => (
            <p key={index}>{clube}</p>
        ))}
        </>
    )
}

export default Inglaterra;