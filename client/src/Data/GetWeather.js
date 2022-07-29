import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchWeatherData() {
    const [weatherData, setWeaterData] = useState([]);

    useEffect(() => {
        axios.get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=67.28&lon=14.405&altitude=11")
        .then(res => {
            setWeaterData(res.data);
        })
    }, []);

    return(
        <div>
            {console.log(weatherData)};
        </div>
    )
}


export default FetchWeatherData;