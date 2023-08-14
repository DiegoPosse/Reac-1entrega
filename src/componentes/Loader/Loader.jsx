import React from 'react';
import { BarLoader, CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        width: '50vw',
        heigth: '150vh',
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
