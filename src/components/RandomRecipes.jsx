import React from 'react'
import { Link } from 'react-router-dom' 

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
                                                    <p> Time: {dataItem.readyInMinutes} mins </p>
                                                    <p> Servings: {dataItem.servings} </p>
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

