import React from 'react';
import PlantCard from './PlantCard.jsx';
import tools from '../images/tools.png'

const Garden = ({ plants, water, fertilize, remove }) => {
  const waterInGarden = (id) => {
    water(id)
  }

  const fertilizeInGarden = (id) => {
    fertilize(id)
  }

  const removeInGarden = (id) => {
    remove(id)
  }

  return (
    <React.Fragment>
      {plants.length ? <div className='garden'> {plants.map(plant => {
        return <PlantCard
          key={plant._id}
          plantInfo={plant}
          w={waterInGarden}
          f={fertilizeInGarden}
          r={removeInGarden}
          />
      })}</div> :
      <div className='noplants'>
        <div><h3>You have no plants!</h3></div>
        <div><img src={tools} alt="tools" width='100' height='100' /></div>
        <div>Add a plant above!</div>
      </div>}
    </React.Fragment>
  );
}

export default Garden;