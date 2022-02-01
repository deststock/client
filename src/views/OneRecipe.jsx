import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import LoadingIcons from 'react-loading-icons'
import time from '../static/time.png'
import servings from '../static/servings.png'
import trueIcon from '../static/trueIcon.png'
import falseIcon from '../static/falseIcon.png'
import noImage from '../static/noImage.jpg'


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
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Nav />
            {loaded ? (
                <div className="oneRecipeInfo">
                    {thisRecipe.image ? (
                        <img src={thisRecipe.image} alt="Recipe Photo" />
                    ) : <img src={noImage} alt="No Photo" />}
                    <div className="textInfo">
                        <h2>{thisRecipe.title}</h2>
                        <div className="recipeStats">
                            <div className="leftCol">
                                <div className="stats">
                                    {thisRecipe.glutenFree ? (
                                        <img src={trueIcon} alt="true icon" />
                                    ) : <img src={falseIcon} alt="false icon"></img>}
                                    <p className="subtext"> Gluten Free </p>
                                </div>
                                <div className="stats">
                                    {thisRecipe.dairyFree ? (
                                        <img src={trueIcon} alt="true icon" />
                                    ) : <img src={falseIcon} alt="false icon"></img>}
                                    <p className="subtext"> Dairy Free </p>
                                </div>
                                <div className="stats">
                                    {thisRecipe.vegetarian ? (
                                        <img src={trueIcon} alt="true icon" />
                                    ) : <img src={falseIcon} alt="false icon"></img>}
                                    <p className="subtext"> Vegetarian </p>
                                </div>
                                <div className="stats">
                                    {thisRecipe.vegan ? (
                                        <img src={trueIcon} alt="true icon" />
                                    ) : <img src={falseIcon} alt="false icon"></img>}
                                    <p className="subtext"> Vegan </p>
                                </div>
                            </div>
                            <div className="rightCol">
                                <div className="stats">
                                    <img src={time} alt="time icon" />
                                    <p className="subtext"> {thisRecipe.readyInMinutes} minutes</p>
                                </div>
                                <div className="stats">
                                    <img src={servings} alt="servings icon" />
                                    <p className="subtext"> {thisRecipe.servings} servings </p>
                                </div>
                            </div>
                        </div>


                        <br />
                        <div>
                            <h3 className='subheading'> Ingredients </h3>
                            <ul>
                                {thisRecipe.extendedIngredients.map((dataItem, i) => {
                                    return (
                                        <div>
                                            <li key={i}> {dataItem.original} </li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                        <h3 className='subheading'> Directions </h3>
                        <p className='instructions' dangerouslySetInnerHTML={{ __html: thisRecipe.instructions }}></p>
                    </div>
                    <div className="bottomPage"> 
                    </div>
                </div>
            ) :
                <div className="centeredCon">
                    <br />
                    <LoadingIcons.TailSpin stroke='rgb(170, 222, 163)' strokeWidth={2.5} className='loadingIcon' />
                </div>
            }
        </div>
    );
}

export default OneRecipe;