import React, { useState } from "react";
import "./Models.css";

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
    const carouselImages = [
        [AkshatImage, HimankImage, ShreyaImage, NamanImage],
        [AkshatImage, CartoonImage, ShreyaImage, TimepicImage],
        [CartoonImage, NamanImage, ShreyaImage, HimankImage],
        [HimankImage, CartoonImage, AkshatImage, TimepicImage],
        [HimankImage, CartoonImage, AkshatImage, TimepicImage],
    ];

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
        <div className="m-8">
            <h2 className="text-5xl font-bold text-center">AR Models</h2>
            {/* Render five carousels */}
            {carouselImages.map((images, index) => (
                <div key={index} className="carousel-wrapper">
                    <Carousel images={images} />
                </div>
            ))}
        </div>
    );
};

export default Models;
