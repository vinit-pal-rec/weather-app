import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
export default function App() {
    const [city, setCity] = useState()
    const [weatherData, setWeatherData] = useState();

    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'8e593d328825eceada2b051532b7e3e6'}`)

            console.log(response)
            setWeatherData(response)


        } catch (error) {
            console.error('Error:', error)
        }
    }
    const handleClick = () => {
        fetchWeather();
    }



    return (

        <div className="weather-container">
            <h1>Weather App</h1>
            <input type="text" placeholder="Enter City Name" value={city} onChange={handleCity} /><br /><br />
            <button onClick={handleClick}>Get Weather</button>
            {(weatherData)?<div className="weather-info">
                
                <h2>City: {weatherData.data.name}</h2>
                <p>Temperature: {parseInt(weatherData.data.main.temp - 273.15)}°C</p>
                <p>Humidity: {weatherData.data.main.humidity}%</p>
                <p>Description: {weatherData.data.weather[0].description}</p>
                {/* <p>Wind Speed: {weatherData.data.wind.speed} km/h</p> */}

            </div>:""}
        </div>

    )
}
