import React from "react";
import './Categories.css'
import ic1 from '../../../assets/categories/burger-icon.svg'
import ic2 from '../../../assets/categories/coffee-icon.svg'
import ic3 from '../../../assets/categories/sushi-icon.svg'
import ic4 from '../../../assets/categories/beer-icon.svg'
import ic5 from '../../../assets/categories/ice-cream-icon.svg'
import ic6 from '../../../assets/categories/delivery-icon.svg'
import ic7 from '../../../assets/categories/pizza-icon.svg'
import ic8 from '../../../assets/categories/soup-icon.svg'

function Categories() {
    return (
        <div className="main-category-wrapper">
            <div className="main-category-white-space"></div>
            <div className="main-category-container">
                <div className="categories-title-wrapper">
                    Categories
                </div>
                <div className="categories-grid">
                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg one" src={ic1} />
                            <div className="category-title">Burgers</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg two" src={ic2} />
                            <div className="category-title">Coffee</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg three" src={ic3} />
                            <div  className="category-title">Sushi</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg four" src={ic4} />
                            <div className="category-title">Beer & Wine & Spirits</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg five" src={ic5} />
                            <div className="category-title">Ice Cream</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg six" src={ic6} />
                            <div className="category-title">Delivery</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg seven" src={ic7} />
                            <div className="category-title">Pizza</div>
                        </div>
                    </button>

                    <button className="category-element">
                        <div className="category-icon-title-wrapper">
                            <img className="category-icon-svg eight" src={ic8} />
                            <div className="category-title">Soup</div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Categories
