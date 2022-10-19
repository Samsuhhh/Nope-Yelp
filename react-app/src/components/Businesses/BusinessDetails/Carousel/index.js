import React, { useState } from "react";
import "./Carousel.css";

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
            <button className='indicators'
                onClick={() => {
                    setActiveIndex(activeIndex - 1);
                }}>
                Prev
            </button>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <button className='indicators'
                onClick={() => {
                    setActiveIndex(activeIndex + 1);
                }}>
                Next
            </button>
        </div>

    );
};

export default Carousel;
