import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherBox from '../Components/WeatherBox';
import WeatherTable from '../Components/WeatherTable';

function Weather() {
  const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=67.28&lon=14.405&altitude=11";
  const [weatherData, setWeaterData] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(res => {
        setWeaterData(res.data);
    })
}, [url]);

  if(weatherData) {
    return (
      <div className="container mx-auto">
        <WeatherBox weatherData={weatherData.properties.timeseries}/>
        <WeatherTable weatherData={weatherData.properties.timeseries} />
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