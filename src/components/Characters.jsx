import { useQuery } from "@tanstack/react-query"
import Character from "./Character"
import { useState } from "react"

const Characters = () =>{

    const[pageNo, setPageNo] = useState(41)
    const fetchCharacters = async ({queryKey}) =>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json()
    }
    const {data, status , isPreviousData} = useQuery(["characters", pageNo] , fetchCharacters , {
        keepPreviousData : true

    })

    console.log(data);

    if(status === "loading"){
        return <div>Loading ...</div>
    }

    if(status === "error"){
        return <div>Error</div>
    }

    return(  
        <div className="container">
            <h2>Page no : {pageNo}</h2>
            {data.results.map(character =>{
                return(
                    <div key={character.id} >
                <Character character={character}/>
                    </div>
                )
            })}
            <button disabled={pageNo === 1} onClick={()=> setPageNo(prevCount => prevCount-1)}>Previous</button>
            <button disabled = {isPreviousData && !data.info.next} onClick={() => setPageNo(prevCount => prevCount+1)}>Next</button>
            </div>
    )
}
export default Characters