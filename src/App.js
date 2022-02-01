import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Main from './views/Main'
import OneRecipe from './views/OneRecipe'
import LoadingScreen from './components/LoadingScreen'
import SearchResults from './components/SearchResults';

function App() {

  const [randomRecipes, setRandomRecipes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [screenLoading, setScreenLoading] = useState(true)

  useEffect(() => {
    axios.get("https://api.spoonacular.com/recipes/random?number=20&apiKey=571f972a0cf64eca93ee18572cb11b33")
      .then(res => {
        setRandomRecipes(res.data)
        setLoaded(true)
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    setTimeout(() => setScreenLoading(false), 4000)
}, [])


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          {screenLoading === false ? (
            <Main randomRecipes={randomRecipes} loaded={loaded} />
          ): <LoadingScreen/>}
        </Route>
        <Route exact path="/search/:search" >
          {screenLoading === false ? (
            <SearchResults />
          ): <LoadingScreen/>}
        </Route>
        <Route exact path="/:id">
          <OneRecipe />
        </Route>
      </Switch>

    </BrowserRouter >
  );
}

export default App;
