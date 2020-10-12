/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import grey from '../assets/images/star-grey.svg';
import yellow from '../assets/images/star-yellow.svg';

export default function StarRatings(props) {
  return (
    <div>
      {[...Array(5)].map((_o, i) => {
        if (props.number === null) {
          return (<img src={grey} alt="g" />);
        }
        if (i + 1 <= Math.round(props.number)) {
          return (<img src={yellow} alt="y" />);
        }
        return (<img src={grey} alt="g" />);
      })}
    </div>
  );
}
