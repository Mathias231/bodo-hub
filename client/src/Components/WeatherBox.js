import React from 'react'

function WeatherBox() {
  return (
        <div className="grid grid-cols-3 gap-2 space-x-4 mt-5">
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">(!) Været 1 time siden</div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">04</div>
            <div className="col-span-1 bg-slate-100 shadow-xl rounded-lg">04</div>
        </div>
  )
}

export default WeatherBox;