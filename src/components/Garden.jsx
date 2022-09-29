import React from 'react';
import PlantCard from './PlantCard.jsx';
import Seed from './Seed.jsx';
import tools from '../images/tools.png'

const Garden = ({plants}) => {
  return (
    <div className='garden'>
      {plants.length ? plants.map(plant => {
        console.log(plant)
        return <PlantCard key={plant._id} plantInfo={plant}/>
      }) : <div className='noplants'>
            <div><h3>You have no plants!</h3></div>
            <div><img src={tools} alt="tools" width='100' height='100' /></div>
            <div>Click the seed icon to add a plant!</div>
           </div>}
    </div>
  );
}

export default Garden;