import React, { useState, useEffect } from 'react';
import Parse from './parse';
import Header from './components/Header.jsx';
import Garden from './components/Garden.jsx';
import Seed from './components/Seed.jsx';
import waterAll from './images/waterall.png';
import replant from './images/replant.png';

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    updatePlants();
  }, [])

  const updatePlants = () => {
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
          updatePlants();
        })
      })
  }


  return (
    <div className="App">
      <div><Header /></div>
      <div className='navigation'>
        <div className="navbuttons">
          <Seed addPlant={addPlant}/>
          <div>Add Plant!</div>
        </div>
        <div className="navbuttons">
          <div className='waterPlants'><img src={waterAll} alt='waterplants'></img></div>
          <div>Water Garden!</div>
        </div>
        <div className="navbuttons">
          <div className='editGarden'><img src={replant} alt='boxedplants'></img></div>
          <div>Edit Garden!</div>
        </div>
      </div>
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
