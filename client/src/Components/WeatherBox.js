import React from 'react'

function WeatherBox(props) {

  // const tempOneHourAgo = props.weatherData.forecast.forecastday[0].hour[1].temp_c.toFixed();
  const tempNow = props.weatherData.current.temp_c.toFixed();
  const tempNextHour = props.weatherData.forecast.forecastday[0].hour[2];


  // Symbols
  const currentWeatherSymbol = props.weatherData.current.condition.icon;
  console.log(currentWeatherSymbol)
  
  return (
    <div className="grid grid-cols-3 gap-2 space-x-4 mt-5">
      <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
        (!) Været for 1 time siden
        <div className="columns-2">
          {/* <img src={images[symbolCodeOneHourAgo + '.svg']} width="100px" className="scale-75" alt=''></img> */}
          {/* <h1>Temp: {tempOneHourAgo}ºC</h1>
          <h1>Wind: {windOneHourAgo}m/s</h1> */}
        </div>
      </div>
      <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
        (!) Været nå
        <div className="columns-2">
          <img src={currentWeatherSymbol} width="100px" className="scale-75" alt=''></img>
          <h1>Temp: {tempNow}ºC</h1>
          {/* <h1>Wind: {windNow}m/s</h1> */}
        </div>
      </div>
      <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
        (!) Været om 1 time
        <div className="columns-2">
          {/* <img src={images[symbolCodeNextHour + '.svg']} width="100px" className="scale-75" alt=''></img>
          <h1>Temp: {tempNextHour}ºC</h1>
          <h1>Wind: {windNextHour}m/s</h1> */}
        </div>
      </div>
    </div>
  )
}

export default WeatherBox;