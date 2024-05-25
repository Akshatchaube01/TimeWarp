import React, { useState } from "react";
import "./Models.css";
import Footer from './Footer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import GoToTop from "./GoToTop";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Import images
import AkshatImage from "../assets/Timepic.jpg";
import HimankImage from "../assets/cartoon.png";
import NamanImage from "../assets/Timepic.jpg";
import ShreyaImage from "../assets/cartoon.png";
import CartoonImage from "../assets/Timepic.jpg";
import TimepicImage from "../assets/cartoon.png";

const Models = () => {
    // Define images for each carousel
    const carouselImages = {
        "Model1":[AkshatImage, HimankImage, ShreyaImage, NamanImage],
        "Model2":[AkshatImage, CartoonImage, ShreyaImage, TimepicImage],
        "Model3":[CartoonImage, NamanImage, ShreyaImage, HimankImage],
        "Model4":[HimankImage, CartoonImage, AkshatImage, TimepicImage],
        "Model5":[HimankImage, CartoonImage, AkshatImage, TimepicImage],
        "Model6":[AkshatImage, CartoonImage, ShreyaImage, TimepicImage],
    }
    const [selectedYear, setSelectedYear] = useState(1800);
    const handleSliderChange = (value) => {
        setSelectedYear(value);
        setCurrentImageIndex(0); // Reset the carousel index when the year changes
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

        return (
            <div className="carousel-container">
                <button onClick={previousImage} className="carousel-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img src={images[currentImageIndex]} alt="Model" className="model-image" />
                <button onClick={nextImage} className="carousel-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    };

    return (
        <div className="text-center m-8">
            <h2 className="text-5xl font-bold text-center">AR Models</h2>
            {/* Render five carousels */}
            <div className="flex flex-wrap justify-center">
            {Object.keys(carouselImages).map((key, index)=>{
                return(<div key={index} className="carousel-wrapper lg:w-1/3 md:w-1/2 sm:w-full">
                    <h2 className="carousel-title">{key}</h2>
                    <Carousel images={carouselImages[`${key}`]} />
                </div>)
            })}
            </div>
            <div className="timeline-slider">
                <h3 className="timeline-title mt-[10rem] mb-[3rem]">Choose Timeline</h3>
            <Slider
                    min={1000}
                    max={2000}
                    step={50}
                    marks={marks}
                    onChange={handleSliderChange}
                    value={selectedYear}
                />
                </div>
            <h2 className="text-2xl font-bold mb-[10rem] text-[#00bfff] mt-[3rem]">{selectedYear}</h2>
            
            <GoToTop/>
            <Footer/>
        </div>
    );
};

export default Models;
