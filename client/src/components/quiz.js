import { useState } from "react";
import axios from 'axios';

export const Quiz = () => {
    const [countryInput, setCountryInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newCountry = {
            "countryName": countryInput,
        }
        
        axios
            .post('/input', newCountry)
            .then(() => console.log('countryInput Created'))
            .catch(err => {
                console.error(err);
            });
    };

    const handleChange = (event) => {
        const countryName = event.target.value;
        setCountryInput(countryName);
    };

    return(
        <div>
            <form className="quiz-form" onSubmit={handleSubmit}>
                <input 
                    className="quiz-input"
                    name="countryName"
                    type="text"
                    placeholder="Enter Country"
                    autoComplete="off"
                    value={countryInput}
                    onChange={handleChange}
                    required
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}