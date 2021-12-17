import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {

  const cars = [
    {model:'Lamborghini Huracan EVO 2021', price:'US$ 1000'},
    {model:'Bentley GTC Mulliner 2020', price:'US$ 900'},
  ]

  return (
    <div className="App">
      <link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      <NavBar/> 
     <h1>PEREGO LUXURY CAR RENTALS</h1>
     {cars.map (c => <Card model={c.model} price={c.price}/>)}
    </div>
  );
}

export default App;
