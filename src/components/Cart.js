import React from 'react'
import Car from './Car'
import './estilos.css';

const Cart = ({cart , setCart}) => {
    return (
        <div>
           <h3 className='white cart '>Carrito</h3> 
            {cart.lenght === 0 ? (<p>0</p>) : (cart.map((car => <Car key={car.id} car={car} cart={cart} setCart={setCart} />)))}

        </div>
    )
}

export default Cart
