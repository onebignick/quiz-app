import { useEffect, useState } from "react";
import './results.scss';

export const Results = () => {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch('/api')
        .then(response => response.json())
        .then(data => setCountries(data))

    });

    if (countries.length === 0){
        return(<div></div>);
    } else {
        return(
            <div className="countries-block">
                <p>You named {countries.length} countries!</p>
                <ol className="countries-list">
                {countries.map(country => (
                    <li>{country}</li>
                ))}
                </ol>
            </div>
        );
    }
}