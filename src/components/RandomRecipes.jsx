import React from 'react'
import { Link } from 'react-router-dom'
import time from '../static/time.png'
import servings from '../static/servings.png'

const RandomRecipes = (props) => {

    const { randomRecipes } = props

    return (
        <div>

            <div className="randomRecipes">
                {Object.keys(randomRecipes).map((key) => {
                    return (
                        <div key={key} className="centeredCon">
                            {randomRecipes[key].map((dataItem, i) => {
                                return (
                                    <Link to={`/${dataItem.id}`} key={i}>
                                        <div className="recipeCard" key={i}>
                                            <img className="cardPhoto" src={dataItem.image} alt="No Photo" />
                                            <div className="quickInfo">
                                                <h4 className="cardName"> {dataItem.title} </h4>
                                                <div className="cardSidebar">
                                                    <div className="stats">
                                                        <img src={time} alt="time icon" />
                                                        <p> {dataItem.readyInMinutes} mins </p>
                                                    </div> 
                                                    <div className="stats">
                                                        <img src={servings} alt="servings icon" />
                                                        <p> {dataItem.servings} </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default RandomRecipes;

