import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'


const OneRecipe = () => {

    const {id} = useParams()
    const {thisRecipe, setThisRecipe} = useState([])

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=571f972a0cf64eca93ee18572cb11b33")
        .then (res => {
            console.log(res.data)
            setThisRecipe(res.data)
        })
    }, [])


    return (
        <div>
            <Nav />
            <h1> hi </h1>
        </div>
    );
}

export default OneRecipe;