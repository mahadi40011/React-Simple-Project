import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //First way for conditional rendering
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }

    //Second way for conditional rendering
    // setVisited(visited ? false : true)

    //Third way for conditional rendering
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>
        Area: {country.area.area},{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
