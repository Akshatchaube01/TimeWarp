import React, { useState, useEffect } from 'react';
import AkshatImage from "../assets/Timepic.jpg";
import '../main.css'

const UnsplashImageGallery = ({ accessKey, count }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [pastImageUrls, setPastImageUrls] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [displayYear, setDisplayYear] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const keyword = 'beautiful monuments India'; 
        const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}&query=${keyword}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch images. Status: ${response.status}`);
        }
        const data = await response.json();
        const urls = data.map(photo => photo.urls.regular);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchPhotos();
  }, [accessKey, count]);

  useEffect(() => {
    const fetchPastImages = async () => {
      const pastImages = [
        AkshatImage,
        
      ];
      setPastImageUrls(pastImages);
    };

    fetchPastImages();
  }, []);
   // Function to handle year change
   const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
    // Function to handle compare button click
    const handleCompareClick = () => {
      setDisplayYear(selectedYear);
      if (selectedYear <= 2024) {
        setSelectedYear(year);
      } else {
        alert("Please enter a year less than or equal to 2024");
      }
    };

  return (
    <>
    <div className='flex justify-center text-[2.5rem] mt-[6rem] mb-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse'>Compare Places</div>
    <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Enter Year</h2>
            <input 
              type="text" 
              value={selectedYear} 
              onChange={handleYearChange} 
              className="px-4 py-2 border rounded-md"
              placeholder="Enter year"
            />
            <button  onClick={handleCompareClick} className="moving-border-button mt-4 ml-5 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl">
            Compare
          </button>
          </div>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="mr-[3rem] ">
        <h2 className="text-2xl font-bold mb-4">Current View</h2>
        {imageUrls.map((url, index) => (
          <div key={index} className="mb-2 futuristic-card">
            <img src={url} alt={`Current View ${index}`} className="w-[15rem] h-[15rem] md:w-[40rem] md:h-[25rem]" />
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{displayYear} View</h2>
        {pastImageUrls.map((url, index) => (
          <div key={index} className="mb-2 futuristic-card">
            <img src={url} alt={`Historical View ${index}`} className="w-[15rem] h-[15rem] md:w-[40rem] md:h-[25rem]" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UnsplashImageGallery;
