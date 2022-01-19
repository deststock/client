import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import LoadingIcons from 'react-loading-icons'


const OneRecipe = () => {

    const { id } = useParams()
    const [thisRecipe, setThisRecipe] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=false&apiKey=571f972a0cf64eca93ee18572cb11b33')
            .then(res => {
                console.log(res.data)
                setThisRecipe(res.data)
                setLoaded(true)
            })
    }, [])


    return (
        <div>
            <Nav />
            {loaded ? (
                <div className="oneRecipeInfo">
                    <img src={thisRecipe.image} alt="Recipe Photo" />
                    <div className="textInfo">
                        <h2>{thisRecipe.title}</h2>
                        <p className="subtext"> Dish types: {thisRecipe.dishTypes} </p>
                        <p className="subtext"> Ready in {thisRecipe.readyInMinutes} minutes</p>
                        <p className="subtext"> Makes {thisRecipe.servings} servings </p>
                        <br />
                        <p className="instructions"> {thisRecipe.instructions} </p>
                        {Object.keys(thisRecipe).map((key) => {
                            return (
                                <div key={key} >
                                    {thisRecipe[key].map((dataItem, i) => {
                                        return (
                                            <p key={i}> {dataItem.name} </p>
                                        )
                                    })}
                                </div>
                            )
                        })}
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

export default OneRecipe;