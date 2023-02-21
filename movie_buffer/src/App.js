//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import MovCard from './Components/MovCard'


function App() {

  const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=7f07872`;
  const [movies,setMovies] = useState([]);

  useEffect( ()=>{
      fetch(apiURL)
      .then(res => res.json())
      .then(data =>setMovies(data))
  },[]);

console.log(movies);

  return (
    <div className="App">
      <div className='search Snav'>
    <div>
      <h1>Movies </h1>
    </div>


      <div>

     <form>
      <input/>
      
       <button> Search </button>
      
     </form>


      </div>




      </div>

       
<div className='movies'>

{
   movies.map((movie)=>
    <MovCard {...movie} />
   )

}



</div>



    </div>
  );
}

export default App;
