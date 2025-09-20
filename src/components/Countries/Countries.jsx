import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountry = (country) => {
    // console.log("country visited", country);
    const isFound = visitedCountries.find( (cnt) => cnt.cca3.cca3 === country.cca3.cca3)
    if(isFound){
      const filteredCountry = visitedCountries.filter(cnt => cnt.cca3.cca3 !== country.cca3.cca3)
      
      setVisitedCountries(filteredCountry)
    }
    else{
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries)
    }
    

    // console.log(filteredCountry)
    
  };
console.log(visitedCountries)
  const countriesObject = use(countriesPromise);
  const countries = countriesObject.countries;
  return (
    <div>
      <h2>in the Countries: {countries.length}</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {
          // visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
