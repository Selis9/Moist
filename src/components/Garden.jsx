import React from 'react';
import PlantCard from './PlantCard.jsx';
import Seed from './Seed.jsx';
import tools from '../images/tools.png'

const Garden = ({plants}) => {
  return (
    <React.Fragment>
      {plants.length ? <div className='garden'> {plants.map(plant => {
        return <PlantCard key={plant._id} plantInfo={plant}/>
      })}</div> :
      <div className='noplants'>
        <div><h3>You have no plants!</h3></div>
        <div><img src={tools} alt="tools" width='100' height='100' /></div>
        <div>Click the seed icon to add a plant!</div>
      </div>}
    </React.Fragment>
  );
}

export default Garden;