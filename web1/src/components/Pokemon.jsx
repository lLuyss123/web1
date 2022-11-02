import React, {useState} from 'react'
import { PetiApi } from './PetiApi';
import { Esti } from './Esti';

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const estado = PetiApi(url);
    const {cargando, data} = estado;


    return(
        <div>
            <h1>PokeApi</h1>
            {
                cargando
                ?
                <h2>Cargando...</h2>
                :
                <div>
                    <Esti results={data.results}/>
                    
                    <div className='parte_baja'>
                        <button className='cambiar' onClick={() =>setUrl(data.previous)}>Atrás</button>
                        <button className='cambiar' onClick={() =>setUrl(data.next)}>Siguiente</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Pokemon;