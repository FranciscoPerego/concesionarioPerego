import React from 'react'
import './estilos.css';

const Car = ({ car , cart, setCart, cars }) => {
    const { id , modelo , precio} = car;
    const reserveCar = (id) => {
      const car = cars.filter((car) => car.id === id);
      setCart([...cart, ...car]);
      console.log(cart.length);
    };
    const delReserve = (id) => {
      const cars = cart.filter(() => car.id !== id);
      setCart(cars);
    };
  
    return (
      <ul className="container__content__burgers">

        <li className="container__content__burgers--nombre">{modelo}</li>
        <li className="container__content__burgers--precio">{precio}</li>
        {cars ? (
          <button
            className="container__content__burgers--btnAdd"
            type="button"
            onClick={() => reserveCar(id)}
          >
            Reservar
          </button>
        ) : (
          <div>
            <button
              className="container__content__burgers--btnDel"
              type="button"
              onClick={() => delReserve(id)}
            >
              Eliminar
            </button>
            <button
              className="container__content__burgers--btnAdd"
              type="button"
              onClick={() => delReserve(id)}
            >
              Confirmar
            </button>
          </div>
        )}
      </ul>
    );
  };
  

export default Car;
