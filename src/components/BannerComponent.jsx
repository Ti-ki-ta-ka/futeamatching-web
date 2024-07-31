import React from 'react';

const BannerComponent = ({ imageUrl}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '200px', 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid gray',
        borderRadius: '5px',
        margin: '5vh 0',
      }}
    />
  );
};

export default BannerComponent;