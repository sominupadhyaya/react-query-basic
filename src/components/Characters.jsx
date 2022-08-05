import { useEffect, useState } from "react"

const Characters = () =>{
    
    const [characters, setCharacters] = useState([])
    
    const fetchCharacters = async () =>{
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const {results} = await response.json()
        console.log(results);
        setCharacters(results)
    }
    useEffect(() =>{
        fetchCharacters()
    } , [])

    return(
        <>
        {characters.map(({name,id})=>{
            return (
            <div key={id}>
            <h2>
            {name}
            </h2>
            </div>
            )
        })}
        </>
    )
}
export default Characters