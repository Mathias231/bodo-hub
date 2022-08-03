import React from 'react'

function WeatherTable(props) {
    const symbolCodeNow = props.weatherData[1].data.next_1_hours.summary.symbol_code; // Shows current symbol code

    // A function that maps through images and replaces ./ to empty string | ./clody.svg => cloudy.svg
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    // Calls function and giving name to array 'images'
    const images = importAll(require.context('../svg', false, /\.(png|jpe?g|svg)$/));
    
  return (
    <>
        {/* div header */}
        <div className="grid grid-cols-6 gap-4 border-b-4 mt-5">
            <div className="col-start-2 col-end-4">
                <div className='grid grid-cols-4'>
                    <h1 className='text-center'>Natt</h1>
                    <h1 className='text-center'>Morgen</h1>
                    <h1 className='text-center'>Ettermiddag</h1>
                    <h1 className='text-center'>Kveld</h1>
                </div>
            </div>
            <div className="col-start-4 col-span-2">
                <div className='grid grid-cols-2'>
                    <h1>Temp</h1>
                    <h1>Vind</h1>
                </div>
            </div>
        </div>
        
        {/* Table body */}
        <div className='grid grid-cols-6'>
            <div className='bg-slate-500'>
                Dato
            </div>
            <div className='col-span-2'>
                <div className="flex flex-row">
                    <img src={images[symbolCodeNow + '.svg']} width="100px" className="scale-75 ml-4" alt='' />
                    <img src={images[symbolCodeNow + '.svg']} width="100px" className="scale-75 ml-6" alt='' />
                    <img src={images[symbolCodeNow + '.svg']} width="100px" className="scale-75 ml-6" alt='' />
                    <img src={images[symbolCodeNow + '.svg']} width="100px" className="scale-75 ml-7" alt='' />
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherTable