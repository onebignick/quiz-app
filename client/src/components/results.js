import { useEffect, useState } from "react";

export const Results = (props) => {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch('/api')
        .then(response => response.json())
        .then(data => setCountries(data))
    });

    return(
        <div>
            <h1>countries named</h1>
            {countries.map(country => (
                <p key={country.id}>{country.id}. {country.countryName}</p>
            ))}
        </div>
    );
}