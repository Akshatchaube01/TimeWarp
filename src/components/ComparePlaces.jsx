import React from 'react';
import UnsplashImageGallery from './Unsplash';

const ComparePlaces = () => {
  // Replace 'ACCESS_KEY' with your actual Unsplash API Access Key
  const accessKey = '1wKSrYCMbn8UDTUbrhqhlxnhIluHoE573xItr-V2lMA';
  const count = 1;

  return (
    <div className=''>
      <UnsplashImageGallery accessKey={accessKey} count={count} />
    </div>
  );
};

export default ComparePlaces;
