import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import time from '../static/time.png'
import servings from '../static/servings.png'
import noImage from '../static/noImage.jpg'
import axios from 'axios'

const SearchResults = (props) => {

    const results = props

    return (
        <div>
            {Object.keys(results).map((key) => {
                return (
                    <div key={key}>
                        {results[key].map((recipe, i) => {
                            return (
                                <div key={i}>
                                    <p> {recipe.title} </p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>

    )
}

export default SearchResults;

