import React from 'react'

function WeatherBox(props) {
  // const tempOneHourAgo = props.weatherData[1].data.instant.details.air_temperature
  // const tempNow = props.weatherData[2].data.instant.details.air_temperature
  // const tempNextHour = props.weatherData[3].data.instant.details.air_temperature

  // A function that maps through images and replaces ./ to empty string | ./clody.svg => cloudy.svg
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // Calls function and giving name to array 'images'
  const images = importAll(require.context('../svg', false, /\.(png|jpe?g|svg)$/));

  // Gets symbol code from weatherData's properties
  const symbolCodeOneHourAgo = props.weatherData[0].data.next_1_hours.summary.symbol_code; // Shows symbol code 1 hour ago
  const symbolCodeNow = props.weatherData[1].data.next_1_hours.summary.symbol_code; // Shows current symbol code
  const symbolCodeNextHour = props.weatherData[2].data.next_1_hours.summary.symbol_code; // Shows symbol code next hour

  return (
        <div className="grid grid-cols-3 gap-2 space-x-4 mt-5">
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              (!) Været for 1 time siden
              <img src={images[symbolCodeOneHourAgo + '.svg']} alt=''></img>
            </div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              <img src={images[symbolCodeNow + '.svg']} alt=''></img>
            </div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              <img src={images[symbolCodeNextHour + '.svg']} alt=''></img>
            </div>
        </div>
  )
}

export default WeatherBox;