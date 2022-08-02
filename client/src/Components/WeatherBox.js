import React from 'react'

function WeatherBox(props) {
  // Temperature
  const tempOneHourAgo = props.weatherData[1].data.instant.details.air_temperature.toFixed();
  const tempNow = props.weatherData[2].data.instant.details.air_temperature.toFixed();
  const tempNextHour = props.weatherData[3].data.instant.details.air_temperature.toFixed();

  // Wind
  const windOneHourAgo = props.weatherData[1].data.instant.details.wind_speed;
  const windNow = props.weatherData[2].data.instant.details.wind_speed;
  const windNextHour = props.weatherData[3].data.instant.details.wind_speed;
  
  // Gets symbol code from weatherData's properties
  const symbolCodeOneHourAgo = props.weatherData[0].data.next_1_hours.summary.symbol_code; // Shows symbol code 1 hour ago
  const symbolCodeNow = props.weatherData[1].data.next_1_hours.summary.symbol_code; // Shows current symbol code
  const symbolCodeNextHour = props.weatherData[2].data.next_1_hours.summary.symbol_code; // Shows symbol code next hour

  // A function that maps through images and replaces ./ to empty string | ./clody.svg => cloudy.svg
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  // Calls function and giving name to array 'images'
  const images = importAll(require.context('../svg', false, /\.(png|jpe?g|svg)$/));


  return (
        <div className="grid grid-cols-3 gap-2 space-x-4 mt-5">
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              (!) Været for 1 time siden
              <div className="columns-2">
                <img src={images[symbolCodeOneHourAgo + '.svg']} width="100px" className="scale-75 animate-pulse" alt=''></img>
                <h1>Temp: {tempOneHourAgo}ºC</h1>
                <h1>Wind: {windOneHourAgo}m/s</h1>
              </div>
            </div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              (!) Været nå
              <div className="columns-2">
                <img src={images[symbolCodeNow + '.svg']} width="100px" className="scale-75 animate-pulse" alt=''></img>
                <h1>Temp: {tempNow}ºC</h1>
                <h1>Wind: {windNow}m/s</h1>
              </div>
            </div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              (!) Været om 1 time
              <div className="columns-2">
                <img src={images[symbolCodeNextHour + '.svg']} width="100px" className="scale-75 animate-pulse" alt=''></img>
                <h1>Temp: {tempNextHour}ºC</h1>
                <h1>Wind: {windNextHour}m/s</h1>
              </div>
            </div>
        </div>
  )
}

export default WeatherBox;