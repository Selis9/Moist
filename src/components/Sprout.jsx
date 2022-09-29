import React, { useState } from 'react';

// Adding plants to garden
const SproutPlant = ({ addPlant, hide, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  const [name, setName] = useState('');
  const [plant, setPlant] = useState('');
  const [age, setAge] = useState('');
  const [waterDate, setWaterDate] = useState('');
  const [fertDate, setFertDate] = useState('');
  const [soil, setSoil] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    hide();
    addPlant({
      plant: plant,
      name: name,
      planted: age,
      location: location,
      watered: waterDate,
      fertilized: fertDate,
      soilType: soil,
    })
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <form className='form' onSubmit={handleSubmit}>
      <label>
        Plant Family:
        <input type="text" require='true' placeholder='Tomato, Pepper, Corn etc...' value={plant} onChange={e => setPlant(e.target.value)} />
      </label>
      <label>
        Plant Name (variety or nickname):
        <input type="text" require='true' placeholder='Sun Gold (tomato), Jalapeno, Ambrosia Hybrid etc...' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Plant Location:
        <input type="text" require='true' placeholder='garden bed, bedroom, north wall etc...' value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      <label>
        Plant Age (when seeds were planted):
        <input type="date" value={age} require='true' onChange={e => setAge(e.target.value)} />
      </label>
      <label>
        Last Watered:
        <input type="datetime-local" value={waterDate} require='true' onChange={e => setWaterDate(e.target.value)} />
      </label>
      <label>
        Last Fertilized Date:
        <input type="date" value={fertDate} require='true' onChange={e => setFertDate(e.target.value)} />
      </label>
      <label>
        Soil Type:
        <select value={soil} onChange={e => setSoil(e.target.value)}>
          <option value="Clay">Clay</option>
          <option value="Silt">Silt</option>
          <option value="Sandy">Sandy</option>
          <option value="Loamy">Loamy</option>
        </select>
      </label>
      <button type="submit" value="Submit">Submit</button>
      <button className="exit" onClick={hide}>Exit</button>
    </form>
    </section>
  </div>
  );
}

export default SproutPlant;