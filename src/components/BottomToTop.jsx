import React from 'react'
import "./BottomToTop.css"
import {
    useState,
    useEffect
} from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuad",
        });
    };

    return (<
        div className={
            `scroll-to-top-button ${isVisible ? 'visible' : ''}`
        }
        onClick={
            backToTop
        } >
        <i class="ri-arrow-up-s-line" > </i> </div>
    )
}

export default BackToTop