import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import time from '../static/time.png'
import servings from '../static/servings.png'
import noImage from '../static/noImage.jpg'
import axios from 'axios'

const SearchResults = () => {

    const { search } = useParams();
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + search + "&apiKey=571f972a0cf64eca93ee18572cb11b33")
        .then(res => {
            setSearchResults(res.data)
            console.log(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {Object.keys(searchResults).map((recipe, key) => {
                return (
                    <div key={key} className="centeredCon">
                        <p> {recipe.title} </p>
                    </div>
                )
            })}
        </div>

    )
}

export default SearchResults;

