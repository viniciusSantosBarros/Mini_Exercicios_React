import PropTypes from "prop-types";

/* Validação sobre o tipo de dado e obrigatoriedade */
Carros.propTypes = {
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
    placa: PropTypes.string.isRequired,
}

/* Valor padrão que será exibido caso retorne vazio */
Carros.defaultProps = {
    marca: "Marca não informada",
    ano: "Ano não informado",
    placa: "Placa não informada"
}

function Carros({marca , ano , placa}){
    return(
        <>
        <p>Marca: {marca}</p>
        <p>Ano: {ano}</p>
        <p>Placa: {placa}</p>
        <hr/>
        </>
    )
}

export default Carros;