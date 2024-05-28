import React from 'react';
import UnsplashImageGallery from './Unsplash';

const ComparePlaces = () => {
  // Replace 'ACCESS_KEY' with your actual Unsplash API Access Key
  const accessKey = 'ACCESS_KEY';
  const count = 1;

  return (
    <div className=''>
      <UnsplashImageGallery accessKey={accessKey} count={count} />
    </div>
  );
};

export default ComparePlaces;
