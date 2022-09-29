import React, { useState } from 'react';
import sun from '../images/sun.png';
import moon from '../images/moon.png';

const Weather = ({ weather, weatherPull }) => {
  const [weatherStatus, setWeatherStatus] = useState('sunny');
  return (
    <div>
      <img className='weather' src={sun} onClick={weatherPull} alt='sun'></img>
      <img className='moon' src={moon} alt='moon'></img>
    </div>
  );
}

export default Weather;