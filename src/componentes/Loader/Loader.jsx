import React from 'react';
import { BarLoader, CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        width: '60vw',
        heigth: '250vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      
      <BarLoader color="blue" size={220} />
    </div>
  );
};

export default Loader;
