import React, { useState, useEffect } from 'react';
import sun from '../images/sun.png';
import moon from '../images/moon.png';

const Weather = ({ weatherList, weatherPull }) => {
  const [weatherStatus, setWeatherStatus] = useState('sunny');
  const [temp, setTemp] = useState('90')

  useEffect(() => {
    console.log(weatherList)
    // let currentTime = Date.now();
    // let currentWeather;

    // weatherList.forEach(weather => {
    //   let start = new Date(weather.startTime);
    //   let end = new Date(weather.endTime);
    //   let startEpoch = start.getTime();
    //   let endEpoch = end.getTime();

    //   if (currentTime > startEpoch && currentTime < endEpoch) {
    //     currentWeather = weather;
    //   }
    // })

    // setTemp(currentWeather.temperature);
  }, []);

  return (
    <div className='weather' >
      <img src={sun} onClick={weatherPull} alt='sun'></img>
      <div className='weatherdetails'>
        <p>{weatherStatus}</p>
        <p>{temp}F°</p>
      </div>
    </div>
  );
}

export default Weather;