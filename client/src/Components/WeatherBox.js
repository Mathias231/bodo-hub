import React from 'react'

function WeatherBox(props) {
  const tempOneHourAgo = props.weatherData[1].data.instant.details.air_temperature
  const tempNow = props.weatherData[2].data.instant.details.air_temperature
  const tempNextHour = props.weatherData[3].data.instant.details.air_temperature

  const img = props.weatherData[0].data.next_1_hours.summary.symbol_code;
  console.log(img);

  return (
        <div className="grid grid-cols-3 gap-2 space-x-4 mt-5">
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">
              (!) Været for 1 time siden
            </div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">04</div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">04</div>
        </div>
  )
}

export default WeatherBox;