import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherBox from '../Components/WeatherBox';
import WeatherTable from '../Components/WeatherTable';

function Weather() {
  const url = "http://api.weatherapi.com/v1/forecast.json?key=29260f0e8e0e4afeabc102627220308&q=Bodo&days=8&aqi=no&alerts=no";
  const [weatherData, setWeaterData] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(res => {
        setWeaterData(res.data);
    })
}, [url]);

  if(weatherData) {
    console.log(weatherData)
    return (
      <div className="container mx-auto">
        <WeatherBox weatherData={weatherData}/>
        {/* <WeatherTable weatherData={weatherData.properties.timeseries} /> */}
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <h1>Something went wrong</h1>
    </div>
  )
}

export default Weather;