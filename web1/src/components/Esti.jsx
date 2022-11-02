import React from 'react'
import {Card} from './Card'
import './Figuras.css'

export const Esti = ({results}) => {
    return (
        <div className='container'>
            <ul className='card'>
                {
                    results.map( p=>(
                        <li className='item' key={p.name}>
                            <Card url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}