import React, { useState, useEffect } from 'react';
import groundplant from '../images/groundplant.png';
import carrot from '../images/carrot.png';
import cauliflower from '../images/cauliflower.png';
import corn from '../images/corn.png';
import eggplant from '../images/eggplant.png';
import lettuce from '../images/lettuce.png';
import pepper from '../images/pepper.png';
import tomato from '../images/tomato.png';
import tree from '../images/tree.png';
import compostbtn from '../images/compostbtn.png';
import fertilizerbtn from '../images/fertilizerbtn.png';
import wateringbtn from '../images/wateringbtn.png';
const moment = require('moment');

const PlantCard = ({ plantInfo, w, f, r}) => {
  const [plantImage, setPlantImage] = useState(groundplant);

  const waterCard = () => {
    w(plantInfo._id);
  }

  const fertCard = () => {
    f(plantInfo._id);
  }

  const removeCard = () => {
    r(plantInfo._id);
  }

  useEffect(() => {
    if (plantInfo.plant.toLowerCase().includes('carrot')) {
      setPlantImage(carrot)
    } else if (plantInfo.plant.toLowerCase().includes('cauliflower')) {
      setPlantImage(cauliflower)
    } else if (plantInfo.plant.toLowerCase().includes('corn')) {
      setPlantImage(corn)
    } else if (plantInfo.plant.toLowerCase().includes('eggplant')) {
      setPlantImage(eggplant)
    } else if (plantInfo.plant.toLowerCase().includes('lettuce')) {
      setPlantImage(lettuce)
    } else if (plantInfo.plant.toLowerCase().includes('pepper')) {
      setPlantImage(pepper)
    } else if (plantInfo.plant.toLowerCase().includes('tomato')) {
      setPlantImage(tomato)
    } else if (plantInfo.plant.toLowerCase().includes('tree')) {
      setPlantImage(tree)
    } else if (plantInfo.plant.toLowerCase().includes('citrus')) {
      setPlantImage(tree)
    } else if (plantInfo.plant.toLowerCase().includes('lime')) {
      setPlantImage(tree)
    } else if (plantInfo.plant.toLowerCase().includes('lemon')) {
      setPlantImage(tree)
    }
  }, [])

  return (
    <div className='plantCard'>
      <div>
        {plantInfo.imageURL ? <img className='PlantImg' src={plantInfo.imageURL} alt="plantimage" /> :<img className='PlantImg' src={plantImage} alt="plantimage" />}
      </div>
      <div>
        <div className='plantDesc'>
          <div>
            <strong>Plant Name:</strong> {plantInfo.name}
          </div>
          <div>
            <strong>Plant Family Name:</strong> {plantInfo.plant}
          </div>
          <div>
            <strong>Location:</strong> {plantInfo.location}
          </div>
          <div>
            <strong>Last Watered:</strong> {moment(plantInfo.lastWatered).fromNow()}
          </div>
          <div>
            <strong>Last Fertilized:</strong> {moment(plantInfo.lastFertilized).fromNow()}
          </div>
          <div>
            <strong>Plant Age:</strong> {moment(plantInfo.plantAge).fromNow()}
          </div>
          <div>
            <strong>Soil Type:</strong> {plantInfo.soilType}
          </div>
        </div>
      </div>
      <div className="actionbuttons">
        <div><img className='wateractionbtn' onClick={waterCard} title='Click to water this plant' src={wateringbtn} alt="watering icon" /></div>
        <div><img className='fertactionbtn' onClick={fertCard} title='Click to fertilize this plant' src={fertilizerbtn} alt="fertilizer icon" /></div>
        <div><img className='compostactionbtn' onClick={removeCard} title='Click to remove this plant' src={compostbtn} alt="composting icon" /></div>
      </div>
    </div>
  );
}

export default PlantCard;