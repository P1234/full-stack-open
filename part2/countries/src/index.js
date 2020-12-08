import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"
import Display from "./Display"


export const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => setCountries(res.data))
  }, [])

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

const handleShow = (e) => {
  setSearch(e.target.value)
  }

  return (
    <div>
      find countries <input type="text" value={search} onChange={handleSearch}/>
      <Display countries={filteredCountries} handleShow={handleShow}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
