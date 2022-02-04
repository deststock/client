import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import time from '../static/time.png'
import servings from '../static/servings.png'
import noImage from '../static/noImage.jpg'
import axios from 'axios'

const SearchResults = () => {

    const { search } = useParams();
    const [searchResults, setSearchResults] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + search + "&apiKey=571f972a0cf64eca93ee18572cb11b33")
            .then(res => {
                setSearchResults(res.data)
                setLoaded(!loaded)
            })
            .catch(err => console.error(err))
        }, [loaded])
        
        console.log(searchResults)
    return (
        <div>
            {loaded ? (
                <div>
                    <p>hi</p>
                    {Object.keys(searchResults).map((key) => {
                        return (
                            <div className="centeredCon" key={key}>
                                {/* {searchResults.results[key].map((dataItem, i) => {
                                    return (
                                        <div className="recipeCard" key={i}>
                                            {dataItem.title}
                                        </div>
                                    )
                                })} */}
                                {}
                            </div>
                        )
                    })}
                </div>
            ) : <p> loading... </p>}
        </div>

    )
}

export default SearchResults;

