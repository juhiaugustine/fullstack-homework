/** Exercise 04 - API **/

async function getData(){
    try {
        const response = await fetch(url);
        const json = await response.json();
        
        let countries = parseJSONResponse(json);

        let ol = document.getElementById("results");
        populateListElements(ol, countries);
    } catch (error) {
        alert(`Error occured: ${error.message}`);
        console.log(error);
    }
}

/* 
    Loops through the JSON and formats each element as a string
    storing the country name and population. 
    The elements are sorted in an alphabetical order which are then returned to the caller.

    Example: [ 'Afghanistan - 40,218,234', 'Åland Islands - 29,458', ... , 'Zimbabwe - 14,862,927' ]
*/
function parseJSONResponse(json) {
    let countries = [];
    for (let i=0; i<json.length; i++){
        const country = json[i];
        const name = country.name.common;
        let population = country.population;
        population = population.toLocaleString(undefined, { minimumFractionDigits: 0 });
        countries.push(`${name} - ${population}`);
    } 
    countries.sort((a, b) => a.localeCompare(b));
    return countries;
}

/* 
    Populates the ordered list with the given string array.
*/
function populateListElements(ol, countries){
    for (let i=0; i<countries.length; i++) {
        const country = countries[i];
        const text = document.createTextNode(country);
        const li = document.createElement('li');
        li.appendChild(text);
        ol.append(li);
    }
}
const url = 'https://restcountries.com/v3.1/all';
getData(url);
