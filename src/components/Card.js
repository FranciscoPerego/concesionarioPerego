import React from 'react'

const Card = ({model , price}) => {
    return (
        <div className='white'>
            <h2>Modelo:{model} </h2>
            <h3>Precio: {price}</h3>
        </div>
    )
}

export default Card
