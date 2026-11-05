import Brasil from "./components/Brasil";
import Inglaterra from "./components/Inglaterra";
import Espanha from "./components/Espanha";

function App(){

    /* Array Clubes Brasil */
    const brasil = ["Corinthains", "Santo André", "São Bernando", "São Caetano", "Aclimação"];

    /* Array Clubes Inglaterra */
    const inglaterra = ["M. City", "M. United", "Arsenal", "Liverpool", "Chelsea"];

    /* Array Clubes Espanha */
    const espanha = ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Villa Real"];

    return(
        <>
            <Brasil brasileirao={brasil}/>
            <Inglaterra premierLeague={inglaterra}/>
            <Espanha laLiga={espanha}/>
        </>
    )
}

export default App;