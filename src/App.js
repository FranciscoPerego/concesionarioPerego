import './App.css';
import NavBar from './components/NavBar';
import React, {Fragment , useState } from 'react'
import Cars from './Car';
import Cart from './components/Cart';


function App() {

  const [cars , setCars] = useState ([
    {id:1 , modelo:'Lamborghini Huracan EVO 2021' , precio:'US$ 1000'},
    {id:2 , modelo:'Bentley GTC Mulliner 2020' , precio:'US$ 900'},
    {id:3 , modelo:'Ferrari 488 Spider 2018' , precio:'US$ 1300'},
  ])

  const [cart , setCart] = useState ([])



  // const cars = [
  //   {model:'Lamborghini Huracan EVO 2021', price:'US$ 1000'},
  //   {model:'Bentley GTC Mulliner 2020', price:'US$ 900'},
  // ]

  return (
    <Fragment>
      <link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      <NavBar/> 
     <h1>PEREGO LUXURY CAR RENTALS</h1>
     {cars.map((car) => (
     <Cars  
     key={car.id}
     car={car}
     cart={cart}
     setCart={setCart}
     cars={cars}
     />
     ))}
      <Cart
      cart ={cart} 
      />

    </Fragment>
     /* {cars.map (c => <Card model={c.model} price={c.price}/>)}
    </div> */
  );
}

export default App;
