import "./weather.css";
import axios from "axios";
import React, { useState, useEffect, useRef, } from "react";
const URL = "http://localhost:9000/";

export default function Weather() {

    const locationRef = useRef();
    const [weather, setWeather] = useState({});

    const locationSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('/users/weather',{cityName:locationRef.current.value});
          console.log(res.data.Temp);
          setWeather(res.data);
        } catch (err) {
          
        }
    };

    const imageURL = "http://openweathermap.org/img/wn/" + weather.Icon + "@2x.png";

    return (
        <div className="weather">
            <h2 className="weatherTopic">Weather</h2>
            <form  className="formWeather" onSubmit={locationSubmit}>
                <label for="cityInput">City Name: </label>
                <input id="cityInput" type="text" name="cityName" ref={locationRef}/>
                <button type="submit">Go</button>
            </form>
            <span>
                {weather.Temp ? <p className="weatherTemp">Temperature:  {weather.Temp}</p> : null}
                {weather.Description ? <p className="weatherDesc">Description:  {weather.Description}</p> : null}
                {weather.Icon ? <img className="weatherIcon" src={imageURL}></img> : null}
            </span>
        </div> 
    )
}
