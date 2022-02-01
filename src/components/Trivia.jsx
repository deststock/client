import React, { useEffect, useState } from 'react'
import axios from 'axios'
import wineCheese from '../static/wine&cheese.jpg'

const Trivia = () => {

    const [trivia, setTrivia] = useState([])
    const [triviaOpen, setTriviaOpen] = useState(false)

    const toggleTrivia = () => {
        setTriviaOpen(!triviaOpen)
    }

    useEffect(() => {
        axios.get("https://api.spoonacular.com/food/trivia/random?apiKey=571f972a0cf64eca93ee18572cb11b33")
            .then(res => {
                setTrivia(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>

            <div className="trivia">
                <img className="headerPhoto" src={wineCheese} alt="header photo" />
                <button className="openTrivia" onClick={toggleTrivia}> Food for thought </button>
                {triviaOpen ? (
                    <div className="triviaText animate__animated animate__flipInX">
                        <div className="triviaBody">
                            <button className="closeTrivia" onClick={toggleTrivia}> x </button>
                            <div className="centeredCon">
                                <h2> Did you know? </h2>
                                <p> {trivia.text} </p>
                            </div>

                        </div>

                    </div>
                ) : <p className="empty"></p>}
            </div>
        </div>
    )
}

export default Trivia;