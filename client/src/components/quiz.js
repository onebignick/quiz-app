import { useState } from "react";
import axios from 'axios';
import './quiz.scss'

export const Quiz = () => {
    const [countryInput, setCountryInput] = useState('');
    const [quizFinish, setQuizFinish] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newCountry = {
            "countryName": countryInput.toLowerCase(),
        }
        
        axios
            .post('/input', newCountry)
            .then(() => console.log('countryInput Created'))
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                    const quizInput = document.getElementById('quiz-user-input');
                    quizInput.classList.add('error')
                    setTimeout(()=>{
                        quizInput.classList.remove('error');
                    }, 300);
                }
                console.error(err);
            });
        document.getElementById('quiz-user-input').value = ''
    };

    const handleChange = (event) => {
        const countryName = event.target.value;
        setCountryInput(countryName);
    };

    const handleClear = () => {
        axios
            .put('/clear')
            .then(()=>console.log('Cleared countries'))
            .catch(err=>err.response())
    };

    const handleFinish = () => {
        setQuizFinish(true);
    }

    const newGame = () => {
        setQuizFinish(false);
        handleClear();
    }

    if (quizFinish === false) {
        return(
            <div>
                <h1>How many countries can you name?</h1>
                <form className="quiz-form" id="quiz-form" onSubmit={handleSubmit}>
                    <input 
                        className="quiz-input"
                        id="quiz-user-input"
                        name="countryName"
                        type="text"
                        placeholder="Enter Country"
                        autoComplete="off"
                        value={countryInput}
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" value="Submit" id="submit-button"/>
                </form>
                <button onClick={handleFinish}>Finish</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        );}
    else {
        return(
            <div>
                <button onClick={newGame}>New Game</button>
            </div>
        );}
}