import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Main from './views/Main'
import OneRecipe from './views/OneRecipe'

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          {loaded && <Main randomRecipes={randomRecipes} />}
        </Route>
        <Route exact path="/:id">
          <OneRecipe />
        </Route>
      </Switch> 
    
    </BrowserRouter >
  );
}

export default App;
