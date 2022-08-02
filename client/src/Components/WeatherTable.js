import React from 'react'

function WeatherTable(props) {
  return (
    // div header
<div className="grid grid-cols-6 gap-4 border-b-4 mt-5">
  <div className="col-start-2 col-end-4">
    <div className='grid grid-cols-4'>
        <h1>Natt</h1>
        <h1>Morgen</h1>
        <h1>Ettermiddag</h1>
        <h1>Kveld</h1>
    </div>
  </div>
  <div className="col-start-4 col-span-2">
    test
  </div>
</div>
  )
}

export default WeatherTable