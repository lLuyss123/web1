import React from 'react'
import {PetiApi} from './PetiApi'

export const Card = ({url}) => {
    const estado = PetiApi(url)
    const {cargando, data} = estado

    return (
        <div>
            {
                cargando
                ?
                <h2>Cargando</h2>
                :
                <div className='caja' style={{width: '14rem'}}>
                    <div>
                        <h5>{data.id}</h5>
                    </div>
                    <div>
                    <p className='nombres-p'>{data.forms[0].name}</p>
                    </div>
                    <div class='blob'>
                        <img src={data.sprites.front_default} alt='pokemon'/>
                    </div>
                </div>
            }
        </div>
    )
}