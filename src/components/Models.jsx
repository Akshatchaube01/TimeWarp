import React, { useState } from "react";
import "./Models.css";
import Footer from './Footer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FireFliesBackground from "./FireFlies";
import BackToTop from "./BottomToTop";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes, faExpand,faShareAlt } from "@fortawesome/free-solid-svg-icons";

// Import images
import AkshatImage from "../assets/Timepic.jpg";
import HimankImage from "../assets/cartoon.png";
import NamanImage from "../assets/Timepic.jpg";
import ShreyaImage from "../assets/cartoon.png";
import CartoonImage from "../assets/Timepic.jpg";
import TimepicImage from "../assets/cartoon.png";
import Calendar from "./EventsCalendar";
import ComparePlaces from "./ComparePlaces";
import Latitude from "./RecommendedPlaces";
import Interests from "./Interests";

const Models = () => {
    // Define images for each carousel
    const carouselImages = {
        "Model1": [AkshatImage, HimankImage, ShreyaImage, NamanImage],
        "Model2": [AkshatImage, CartoonImage, ShreyaImage, TimepicImage],
        "Model3": [CartoonImage, NamanImage, ShreyaImage, HimankImage],
        "Model4": [HimankImage, CartoonImage, AkshatImage, TimepicImage],
        "Model5": [HimankImage, CartoonImage, AkshatImage, TimepicImage],
        "Model6": [AkshatImage, CartoonImage, ShreyaImage, TimepicImage],
    };
    const [selectedYear, setSelectedYear] = useState(1800);
    const [showCalendar, setShowCalendar] = useState(false);
    const [popupImage, setPopupImage] = useState(null);

    const handleSliderChange = (value) => {
        setSelectedYear(value);
    };

    const handleToggle = () => {
        setShowCalendar(prevShowCalendar => !prevShowCalendar);
    };

    const marks = {};
    for (let year = 1000; year <= 2000; year += 100) {
        marks[year] = year.toString();
    }

    const Carousel = ({ images }) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const nextImage = () => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        const previousImage = () => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        const handleImageClick = (image) => {
            setPopupImage(image);
        };

        return (
            <div className="carousel-container">
                <button onClick={previousImage} className="carousel-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="image-container">
                    <img
                        src={images[currentImageIndex]}
                        alt="Model"
                        className="model-image"
                    />
                    <button className="view-icon" onClick={() => handleImageClick(images[currentImageIndex])}>
                        <FontAwesomeIcon icon={faExpand} />
                    </button>
                    <button className="share-icon">
                        <FontAwesomeIcon icon={faShareAlt} />
                    </button>
                </div>
                <button onClick={nextImage} className="carousel-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    };

    const handleClosePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="text-center m-8">
            <FireFliesBackground />
            <BackToTop />
            <h2 className="text-5xl font-bold text-center">AR Models</h2>
            {/* Render five carousels */}
            <div className="flex flex-wrap justify-center">
                {Object.keys(carouselImages).map((key, index) => (
                    <div key={index} className="carousel-wrapper lg:w-1/3 md:w-1/2 sm:w-full">
                        <h2 className="carousel-title">{key}</h2>
                        <Carousel images={carouselImages[key]} />
                    </div>
                ))}
            </div>
            <div className="timeline-slider">
                <h3 className="timeline-title mt-[6rem] mb-[3rem]">Choose Timeline</h3>
                <Slider
                    min={1000}
                    max={2000}
                    step={50}
                    marks={marks}
                    onChange={handleSliderChange}
                    value={selectedYear}
                />
            </div>
            <h2 className="text-2xl font-bold mb-[3rem] text-[#00bfff] mt-[3rem]">{selectedYear}</h2>

            <Interests/>

            {/* calendar */}
            <div className="flex flex-col items-center">
                <button
                    onClick={handleToggle}
                    className="mb-10 p-2 bg-[#20419b] text-white rounded hover:bg-blue-700"
                >
                    {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
                </button>
                {showCalendar && (
                    <div className="flex justify-center">
                        <Calendar />
                    </div>
                )}
            </div>
            <div className="mb-[8rem]">
                <ComparePlaces />
            </div>
            <div className="mb-[8rem]">
                <Latitude />
            </div>
            <Footer />

            {/* Popup Image */}
            {popupImage && (
                <>
                    <div className="popup-overlay" onClick={handleClosePopup}></div>
                    <div className="popup-card">
                        <button className="close-button" onClick={handleClosePopup}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img src={popupImage} alt="Popup Model" className="popup-image" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Models;
