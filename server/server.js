const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;


const countries = [{
    "id": 1,
    "countryName": "United States of America"
}]

require("dotenv").config();
mongoose.connect(
    process.env.URI
)

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.json())

app.get('/api', (request, response) => {
    response.json(countries);
});

app.post('/input', (request, response) => {
    const newCountry = {
        "id": countries.length + 1,
        "countryName": request.body.countryName,
    }
    countries.push(newCountry);
    console.log(countries);
});

app.listen(port, ()=> {
    console.log(`Express conected to: http://localhost:${port}`)
});