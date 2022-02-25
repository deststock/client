import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import time from '../static/time.png'
import servings from '../static/servings.png'
import noImage from '../static/noImage.jpg'
import axios from 'axios'
import Nav from '../components/Nav'

const SearchResults = () => {

    const { search } = useParams();
    const [results, setResults] = useState([])
    const [loaded, setLoaded] = useState(false) 

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?query=" + search + "&apiKey=571f972a0cf64eca93ee18572cb11b33")
            .then(res => {
                setResults(res.data)
                setLoaded(true)
                console.log(res.data)
            })
            .catch(err => console.error(err))
        }, [results])

    return (
        <div>
            {loaded ? (
                <div>
                    <Nav />
                    <SearchResults results={results}/> 
                </div>
            ) : <p> loading... </p>}
        </div>

    )
}

export default SearchResults;

