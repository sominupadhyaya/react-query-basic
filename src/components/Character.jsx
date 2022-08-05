const Character = ({character}) =>{
    return(
        <>
        <div className="card">
        <img src={character.image} alt="img of character" />
        <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">{character.status} - {character.species}</p>
        <p className="title">Last seen on {character.location.name}</p>
        <p className="title">Originally from {character.origin.name}</p>
        </div>
        </div>
        </>
    )
}

export default Character