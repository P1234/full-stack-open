import React, {useState, useEffect} from 'react'
import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY

const Weather = (props) => {
  const [weather, setWeather] = useState("")

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.capital}&units=m`)
    .then(res => setWeather(res.data))
  }, [props.capital])

if (weather) {
  return (
    <div>
      <h3>Weather in {props.capital}</h3>
      <p><b>temperature:</b> {weather.current.temperature}</p>
      <img src={weather.current.weather_icons[0]} alt="weather icon"/>
      <p><b>wind:</b> {weather.current.wind_speed} km/h direction {weather.current.wind_dir}</p>
    </div>
  )
} else {
  return(<div></div>)
}

}

export default Weather;
