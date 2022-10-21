import React, { useState } from "react";
import "./Carousel.css";
import prev from '../../../../assets/businessdetails/previcon.svg'
import next from '../../../../assets/businessdetails/nexticon.svg'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="carousel">
            <div className="image-indicator-wrapper">
                <button className='indicators'
                    onClick={() => {
                        setActiveIndex(activeIndex - 1);
                    }}>
                    <img id="prev-button" src={prev} />
                </button>
            </div>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className="image-indicator-wrapper">
                <button className='indicators'
                    onClick={() => {
                        setActiveIndex(activeIndex + 1);
                    }}>

                    <img id="next-button" src={activeIndex < 2 ? next : ''} />
                </button>
            </div>
        </div>

    );
};

export default Carousel;
