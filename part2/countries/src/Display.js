import React from 'react'
import SingleCountry from "./SingleCountry"
import ManyCountries from "./ManyCountries"

const Display = (props) => {
  const countries = props.countries;

  if (countries.length > 10) {
    return(<div>Too many matches, specify another filter</div>)
  } else if (countries.length > 1){
    return(<ManyCountries countries={countries} handleShow={props.handleShow}/>)
  }else if (countries.length === 1) {
    return(<SingleCountry country={countries}/>)
  } else {
    return(<div>No matches</div>)
  }
}

export default Display

