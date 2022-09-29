import React, { useState, useEffect } from 'react';
import Parse from './parse';
import Header from './components/Header.jsx';
import Garden from './components/Garden.jsx';
import Seed from './components/Seed.jsx';
import waterAll from './images/waterall.png';
import fertilizer from './images/fert.png';
import compost from './images/compost.png';

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    reSetPlants();
  }, [])

  const reSetPlants = () => {
    Parse.getPlants(`/plants`)
      .then((data) => {
        setPlants([...data.data]);
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const addPlant = (plantData) => {
    Parse.addPlants('/plants', plantData)
      .then(() => {
        Parse.getPlants('/plants')
        .then((data) => {
          reSetPlants();
        })
      })
  }

  const updateAllPlantsWater = () => {
    Parse.update('/plants', {watered: Date.now()})
      .then((data) => reSetPlants())
  }

  const updateAllPlantsFertilizer = () => {
    Parse.update('/plants', {fertilized: Date.now()})
      .then((data) => reSetPlants())
  }


  return (
    <div className="App">
      <header>
      <div><Header /></div>
      <div className='navigation'>
        <div className="navbuttons">
          <Seed addPlant={addPlant}/>
          <div>Add A Plant</div>
        </div>
        <div className="navbuttons">
          <div className='fertPlants' onClick={updateAllPlantsFertilizer}><img src={fertilizer} alt='fertlizer bag'></img></div>
          <div>Fertilize All Plants</div>
        </div>
        <div className="navbuttons">
          <div className='waterPlants' onClick={updateAllPlantsWater}><img src={waterAll} alt='waterplants'></img></div>
          <div>Water All Plants</div>
        </div>
        <div className="navbuttons">
          <div className='compost'><img src={compost} alt='compost'></img></div>
          <div>Remove All Plants</div>
        </div>
      </div>
      </header>
      <div className='Main'>
        <Garden
          plants={plants}
        />
      </div>
      <footer>Icons from <a href='https://www.icons8.com'>icons8.com</a></footer>
    </div>
  );
}

export default App;
