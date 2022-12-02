require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Connecting to MongoDb
const { MongoClient } = require("mongodb");
uri = process.env.URI;
console.log(uri)

const client = new MongoClient(uri);

client.connect()

async function findCountry(client, countryName) {
    const result = await
        client.db("countries-data")
        .collection('countries')
        .findOne({'input':countryName});

        if (result) {
            return(result)
        } else {
            console.log("No data")
        }
}


const countries = [{
    "id": 1,
    "countryName": "United States of America"
}]


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

app.post('/input', async (request, response) => {
    const userInput = request.body.countryName.toLowerCase()
    const result = await findCountry(client, userInput);

    const newCountry = {
        "id": countries.length + 1,
        "countryName": result.displayName
    }
    countries.push(newCountry);
    console.log(result.displayName)
});

app.listen(port, ()=> {
    console.log(`Express conected to: http://localhost:${port}`)
});