import React, { useState, useEffect } from 'react';
import Parse from './parse';
import Header from './components/Header.jsx';
import Garden from './components/Garden.jsx';
import Seed from './components/Seed.jsx';
import Weather from './components/Weather.jsx';
import waterAll from './images/wateringbtn.png';
import fertilizer from './images/fertilizerbtn.png';
import compost from './images/compostbtn.png';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    reSetPlants();
    Parse.getWeather()
      .then((data) => {
        setWeather(JSON.parse(data.data[0].weatherData).data.properties.periods)})
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

  const pullWeather = () => {
    Parse.getAPIWeather()
      .then((data) => {
        setWeather(data.data.properties.periods);
        Parse.saveWeather({weather: data.data});
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

  const waterPlant = (id) => {
    Parse.update('/plants', {id: id, watered: Date.now()})
    .then((data) => reSetPlants());
  }

  const fertilizePlant = (id) => {
    Parse.update('/plants', {id: id, fertilized: Date.now()})
    .then((data) => reSetPlants());
  }

  const removePlant = (plantId) => {
    console.log(plantId)
    Parse.remove('/plants',plantId)
    .then((data) => reSetPlants());
  }


  return (
    <div className="App">
      <header>
      <div><Header/></div>
      <div className='navigation'>
        <div className="navbuttons" id='addnav'>
          <Seed addPlant={addPlant}/>
          <div>Add A Plant</div>
        </div>
        <div className="navbuttons" id='waternav'>
          <div className='waterPlants' onClick={updateAllPlantsWater}><img src={waterAll} alt='waterplants'></img></div>
          <div>Water All Plants</div>
        </div>
        <div className="navbuttons" id='fertnav'>
          <div className='fertPlants' onClick={updateAllPlantsFertilizer}><img src={fertilizer} alt='fertlizer bag'></img></div>
          <div>Fertilize All Plants</div>
        </div>
        <div className="navbuttons" id='compostnav'>
          <div className='compost'><img src={compost} alt='compost'></img></div>
          <div>Remove All Plants</div>
        </div>
      </div>
      </header>
      <div className='Main'>
        <Garden
          plants={plants}
          water={waterPlant}
          fertilize={fertilizePlant}
          remove={removePlant}
        />
      </div>
      <div>
        <Weather weatherList={weather} weatherPull={pullWeather}/>
      </div>
      <footer>Icons from <a href='https://www.icons8.com'>icons8</a></footer>
    </div>
  );
}

export default App;
