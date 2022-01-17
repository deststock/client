import React from 'react'
import Nav from '../components/Nav'
import Trivia from '../components/Trivia'
import RandomRecipes from '../components/RandomRecipes'

const Main = (props) => {

    const {randomRecipes} = props

    return (
        <div>
            <Nav />
            <Trivia />
            <div className="heading1">
                <h2> Try something new... </h2>
            </div>
            <RandomRecipes randomRecipes={randomRecipes}/>
        </div>
    );
}

export default Main;