import React, { useState } from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';
import './Interests.css';

function Interests() {
  const [interests, setInterests] = useState({
    architecture: false,
    militaryHistory: false,
    culturalHistory: false,
    art: false,
    science: false,
  });

  const [showSavedPopup, setShowSavedPopup] = useState(false);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setInterests(prevInterests => ({
      ...prevInterests,
      [name]: checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected interests:', interests);
    // Here you can add code to save the interests to a backend or perform other actions

    // Show the saved popup
    setShowSavedPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowSavedPopup(false);
    }, 3000);
  };

  return (
    <>
      <h1 className='flex justify-center text-[2.5rem] mt-[6rem] mb-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>
        Customize Your Interests
      </h1>
      <div className="interests-background">
        <div className="interests-container bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {Object.keys(interests).map((interest) => (
              <div key={interest} className="interest-item">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name={interest}
                    checked={interests[interest]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {interests[interest] ? <FaCheckSquare className="text-blue-500 text-xl" /> : <FaSquare className="text-gray-400 text-xl" />}
                  <span className="ml-2 text-lg">{interest.charAt(0).toUpperCase() + interest.slice(1)}</span>
                </label>
              </div>
            ))}
            <button type="submit" className="moving-border-button mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl">
              Save Preferences
            </button>
          </form>
        </div>
      </div>

      {/* Popup for saved message */}
      {showSavedPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <p className="text-lg font-semibold text-green-600">Saved!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Interests;
