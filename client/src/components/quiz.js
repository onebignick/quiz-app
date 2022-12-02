import { useState } from "react";
import axios from 'axios';
import './quiz.scss'
export const Quiz = () => {
    const [countryInput, setCountryInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newCountry = {
            "countryName": countryInput.toLowerCase(),
        }
        
        axios
            .post('/input', newCountry)
            .then(() => console.log('countryInput Created'))
            .catch(err => {
                console.error(err);
            });
        document.getElementById('quiz-user-input').value = ''
    };

    const handleChange = (event) => {
        const countryName = event.target.value;
        setCountryInput(countryName);
    };

    return(
        <div>
            <h1>How many countries can you name?</h1>
            <form className="quiz-form" onSubmit={handleSubmit}>
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
        </div>
    );
}