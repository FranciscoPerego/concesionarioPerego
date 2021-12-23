import React from 'react'


const Car = ({car , cart , setCart , cars}) => {

    const {modelo, precio , id} = car


    const reserveCar = id => {
            const car = cars.filter((car) => car.id === id)  
    }
    return (
        <div className='white'>
            <ul>
                <li>{modelo}</li>
                <li>{precio}</li>
                <button type='button' onClick={() => reserveCar(id)}>Reservar</button>
            </ul>
        </div>
    )
}

export default Car;
