const express = require('express');
const axios = require('axios');
const { json } = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here

function populationSort(a, b) {
  if (a.population < b.population) { return -1; }
  if (a.population > b.population) { return 1; }
  return 0;
}

async function makeNetworkRequest() {
  let countries = [];
  await axios.get(url)
  .then(response => {
    response.data.forEach(country => {
      let capital="no data";
      if (country.capital){
        capital=country.capital[0];
      }
      countries.push({
        'name': `${country.name.common}`,
        'population': `${country.population}`,
        'region': `${country.region}`,
        'capital': `${capital}`
      })
    }
    );
  })
  .catch(function (error) {
    console.log(error);
  })
  return countries;
}

app.get('/', (req, res) => {
  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array
  makeNetworkRequest().then((countries) => {
    let capitals = [];
    countries.forEach(country => {
      capitals.push(`${country.name} - ${country.capital}`);
  });
  capitals.sort((a, b) => a.localeCompare(b));
  res.render('page', {
    heading: 'Countries and Capitals',
    results: capitals,
  });
  });
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population
   makeNetworkRequest().then((countries) => {
    let largeCountries = [];
    countries.forEach( (country) => {
      if (country.population > 50000000) {
        largeCountries.push(country)
      }
    });
    let sortedLargeCountries = largeCountries.sort((a, b) => b.population - a.population);
    let results = [];
    sortedLargeCountries.forEach( (country) => {
      let population = parseInt(country.population)
      results.push(`${country.name} - ${population.toLocaleString()}`)
    });

    res.render('page', {
      heading: 'Most Populous Countries',
      results: results,
    });
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

   makeNetworkRequest().then((countries) => {
    const dictionary = {}
    countries.forEach((country) => {
      const region = country.region;
      if (dictionary[region]) {
        let count = dictionary[region];
        count++;
        dictionary[region] = count;
      } else {
        dictionary[region] = 1;
      }
    });
    let regionsObjectArray = []
    for(let key in dictionary) {
      let value = dictionary[key];
      regionsObjectArray.push({
        'region': key,
        'count': value
      })
    }
    let sortedRegions = regionsObjectArray.sort((a, b) => b.count - a.count);
    let regions = []
    sortedRegions.forEach((region) => {
      regions.push(`${region.region} - ${region.count}`)
    });
    res.render('page', {
      heading: 'Regions of the World',
      results: regions,
    });
  });

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
