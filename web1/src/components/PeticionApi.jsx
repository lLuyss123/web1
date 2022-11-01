import React from  'react' ;

const PeticionApi = () => {
const [personajes,setPersonajes]=React.useState([]);
const [paginacion,setPaginacion]=React.useState([]);

  const obtenerPersonajes = async() =>{
    try {
    
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const {results}= await res.json();
        setPersonajes.log(results);
    
    
} catch (error) {
    console.log(error);
}
}

    return (
        <div><h1>Petición Api Pokemon</h1>
        <button onClick={obtenerPersonajes}>Traer Personajes</button>
        {
          personajes.map((resultado)=>(
            <div>
              <h4>
                {resultado.name}-{resultado.url}
              </h4>
            </div>
          ))
        }
        </div>
    )
        
}
export default PeticionApi;