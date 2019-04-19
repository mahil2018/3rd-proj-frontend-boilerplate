import React from 'react';
import { GreenLabel }  from './GreenLabel';

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <GreenLabel>The water would boil.</GreenLabel>;
  } else {
    return <p>The water would not boil.</p>;
  }
}

export default BoilingVerdict;