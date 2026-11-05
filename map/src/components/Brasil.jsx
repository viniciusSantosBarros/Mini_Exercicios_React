function Brasil({brasileirao}){

    return(
        <>
        <h1>Clubes Brasil:</h1>

        {brasileirao.map((clube, index) => (
            <p key={index}>{clube}</p>
        ))}
        </>
    )
}

export default Brasil;