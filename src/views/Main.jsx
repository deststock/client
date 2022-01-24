import React, { useEffect, useState } from 'react'
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
                <div>
                    <RandomRecipes randomRecipes={randomRecipes} />
                    <div className="bottomCon">
                        <p> Still don't see something you like? Try searching for a recipe!</p>
                    </div>
                </div>
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