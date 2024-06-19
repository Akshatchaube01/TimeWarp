import React, { useEffect, useState } from 'react';

function Latitude() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            fetchCity(latitude, longitude);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        if (city !== '') {
            fetchImages(city);
        }
    }, [city]);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLoading(false);
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        setLoading(false);
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                window.alert("Please enable location services to view nearest places."); // Alert message
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
        }
        setLoading(false);
    }

    function fetchCity(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.address.state_district) {
                    setCity(data.address.state_district);
                } else if (data.address && data.address.nearest) {
                    setCity(`Nearest cities: ${data.address.nearest.join(', ')}`);
                } else {
                    setCity('City not found');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setCity('Error occurred');
            });
    }

    function fetchImages(city) {
        // Replace 'ACCESS_KEY' with your Unsplash access key
        const accessKey = 'UNSPLASH ACCESS_KEY';
        const places = `${city} landmark `;
        const url = `https://api.unsplash.com/search/photos?query=${places}&client_id=${accessKey}&per_page=6`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setImages(data.results);
                } else {
                    console.log('No images found for the city:', city);
                    setImages([]);
                }
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setImages([]);
            });
    }

    return (
        <div>
            <h1 className='md:text-[2.5rem] text-[1.5rem] font-bold mb-[5rem] bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 text-transparent'>Recomended Places For You In Your {city}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>   
                  <div className='flex items-center justify-center'>
                  {images.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                  {images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-md shadow-xl transform transition duration-300 hover:scale-105">
                    <img src={image.urls.small} alt={`Image ${index}`} className="object-cover md:w-[25rem] md:h-[25rem] w-[25rem] h-[15rem]" />
                    <div className="absolute inset-0 border-2 border-blue-500 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white">
                        <h2 className="text-lg font-semibold">{/* Place name */}</h2>
                        <h2 className="text-md">{image.alt_description || 'No description available'}</h2>
                        <p className="text-sm">Place: {image.location ? (image.location.name || 'Unknown') : 'Unknown'}</p>
                        <p className="text-sm">{/* Time period */}</p>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <p>No images found for {city}</p>
    )}
</div>

                </div>
            )}
        </div>
    );
}

export default Latitude;
