import React from 'react'
import Nav from '../components/Nav'
import Trivia from '../components/Trivia'
import RandomRecipes from '../components/RandomRecipes'
import LoadingIcons from 'react-loading-icons'

const Main = (props) => {

    const { randomRecipes, loaded } = props

    return (
        <div>
            <Nav />
            <Trivia />
            <div className="heading1">
                <h2> Try something new... </h2>
            </div>
            {loaded ? (
                <RandomRecipes randomRecipes={randomRecipes} />
            ) : 
            <div className="centeredCon">
                <br />
                <LoadingIcons.TailSpin stroke='rgb(170, 222, 163)' strokeWidth={2.5} />
            </div>
            }
        </div>
    );
}

export default Main;