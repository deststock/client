import React, { useEffect, useState } from 'react'
import axios from 'axios'
import wineCheese from '../static/wine&cheese.jpg'

const RandomRecipes = (props) => {

    const { randomRecipes } = props

    return (
        <div>

            <div className="">
                {Object.keys(randomRecipes).map((key) => {
                    return (
                        <div key={key}>
                            {randomRecipes[key].map((dataItem, i) => {
                                return (
                                    <div className="randomRecipes" key={i}>
                                        <img className="cardPhoto" src={dataItem.image} alt="recipe photo" />
                                        <div className="quickInfo">
                                            <h4> {dataItem.title} </h4>
                                            <div className="cardSidebar">
                                                <p> Time: {dataItem.readyInMinutes} mins </p>
                                                <p> Servings: {dataItem.servings} </p>
                                            </div>

                                        </div>
                                    </div>
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

