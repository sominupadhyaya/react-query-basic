import { useQuery } from "@tanstack/react-query"
import Character from "./Character"
import { useState } from "react"

const Characters = () =>{

    const[pageNo, setPageNo] = useState(1)
    const fetchCharacters = async ({queryKey}) =>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey}`)
        return response.json()
    }
    const {data, status} = useQuery(["characters", pageNo] , fetchCharacters)

    console.log(data);

    if(status === "loading"){
        return <div>Loading ...</div>
    }

    if(status === "error"){
        return <div>Error</div>
    }

    return(  
        <div>
            <h2>Page no : {pageNo}</h2>
            {data.results.map(character =>{
                return(
                    <div key={character.id} >
                <Character character={character}/>
                    </div>
                )
            })}
            <button disabled={pageNo === 1} onClick={()=> setPageNo(prevCount => prevCount-1)}>Previous</button>
            <button onClick={() => setPageNo(prevCount => prevCount+1)}>Next</button>
            </div>
    )
}
export default Characters