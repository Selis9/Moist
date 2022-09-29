import React, { useState } from 'react';
import seed from '../images/seed.png';
import SproutPlant from './Sprout.jsx';

const Seed = ({ addPlant }) => {
  const [sproutPlant, setSproutPlant] = useState(false);

  const showSproutPlant = () => {
    setSproutPlant(true)
  };

  const hideSproutPlant = () => {
    setSproutPlant(false)
  };

  return (
    <React.Fragment>
      <div className='addSeeds' onClick={showSproutPlant}><img src={seed} alt='seeds'></img></div>
      {sproutPlant ? <div className="form">
        <SproutPlant
          addPlant={addPlant}
          hide={hideSproutPlant}
          show={sproutPlant}
        />
      </div> : null}
    </React.Fragment>
  );
}

export default Seed;