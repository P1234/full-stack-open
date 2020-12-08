import React from 'react'


const ManyCountries = (props) => {
  const countries = props.countries;
  return (
      countries.map(country => (
        <div key={country.name}>
            {country.name} <button value={country.name} onClick={props.handleShow}>show</button>
        </div>
      ))
  )
}
export default ManyCountries;

