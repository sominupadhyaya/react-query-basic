import { useQuery } from "@tanstack/react-query"

const Characters = () =>{

    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        return response.json()
    }
    const {data, status} = useQuery(["characters"] , fetchCharacters)

    console.log(data);

    if(status === "loading"){
        return <div>Loading ...</div>
    }

    if(status === "error"){
        return <div>Error</div>
    }

    return(
        <>
        {
            data.results.map(character =>{
                return(
                <div key={character.id}>
                <h2>{character.name}</h2>
                </div>
                )
            })
        }
        </>
    )
}
export default Characters