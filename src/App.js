import './App.css';
import React, { useState, useEffect } from 'react'
import Main from './views/Main'
import axios from 'axios';

function App() {

  const [randomRecipes, setRandomRecipes] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get("https://api.spoonacular.com/recipes/random?number=50&apiKey=571f972a0cf64eca93ee18572cb11b33")
      .then(res => {
      console.log(res.data)
      setRandomRecipes(res.data)
      setLoaded(true)
    })
  }, [])


  return (
    <div className="App">
      {loaded && <Main randomRecipes={randomRecipes}/>}
    </div>
  );
}

export default App;
