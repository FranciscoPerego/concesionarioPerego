import React from 'react'


const Car = ({car , cart , setCart , cars}) => {

    const {modelo, precio , id} = car;


    const reserveCar = (id) => {
            const car = cars.filter((car) => car.id === id);
            setCart([...cart, ...car])  
    }

    const delCar = (id) => {
        const cars = cart.filter(burguer => burguer.id !== id)
        setCart(cars)
    }
    
    return (
        <div className='white'>
            <ul>
                <li>{modelo}</li>
                <li>{precio}</li>
                {cars ? (
                <button type='button' onClick={() => reserveCar(id)}>
                    Reservar
                </button>
                ) : (
                    <div>
                    <button type='button' onClick={() => reserveCar(id)}>
                    Cancelar
                </button>
                </div>
                )}
            </ul>
        </div>
    )
}

export default Car;
