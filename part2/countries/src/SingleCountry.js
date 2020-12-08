import React from 'react'
import Weather from "./Weather"

const SingleCountry = (props) => {
  const country = props.country[0]

  return (
    <div>
      <h1>{country.name}</h1>
      <div>Capital {country.capital}</div>
      <div> Population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {country.languages.map(lan => (<li key={lan.name}>{lan.name}</li>))}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} width="300px" height="200px"/>
      <Weather capital={country.capital}/>
    </div>
  )
}

export default SingleCountry
