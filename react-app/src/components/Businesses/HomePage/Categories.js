import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllBusinessesThunk } from "../../../store/business";
import Fuse from 'fuse.js'
import './Categories.css'
import ic1 from '../../../assets/categories/burger-icon.svg'
import ic2 from '../../../assets/categories/coffee-icon.svg'
import ic3 from '../../../assets/categories/sushi-icon.svg'
import ic4 from '../../../assets/categories/beer-icon.svg'
import ic5 from '../../../assets/categories/ice-cream-icon.svg'
import ic6 from '../../../assets/categories/delivery-icon.svg'
import ic7 from '../../../assets/categories/pizza-icon.svg'
import ic8 from '../../../assets/categories/soup-icon.svg'

const options = {
    findAllMatches: true,
    keys: [
        'tags.tag',
        { name: "business_name", weight: 2 },
        { name: "about", weight: .5 },
        { name: "city", weight: 2.5 },

    ],
    includeScore: true,
}

function Categories({ setSearch }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const businesses = useSelector(state => state.businesses.allBusinesses)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])

    const handleSearchSubmitBurger = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("burger")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitCoffee = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("coffee")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitSushi = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("sushi")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitBWS = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("Beer")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitAlex = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("Ice Cream")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitDelivery = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("delivery")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitPizza = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("pizza")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    const handleSearchSubmitSoup = async (e) => {
        e.preventDefault()
        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search("soup")
        const businessResults = results.map(result => result.item).slice(0, 15)
        setSearch(businessResults)
        return history.push("/businesses")
    }
    return (
        <>
            <div className="main-category-wrapper">
                <div className="main-category-white-space"></div>
                <div className="main-category-container">
                    <div className="categories-title-wrapper">
                        Categories
                    </div>
                    <div className="categories-grid">

                        <form onSubmit={handleSearchSubmitBurger}>
                            <button
                                type="submit"
                                className="category-element"
                            >
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg one" src={ic1} alt='icon1' />
                                    <div className="category-title">Burgers</div>
                                </div>
                            </button>
                        </form>

                        <form onSubmit={handleSearchSubmitCoffee}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg two" src={ic2} alt='icon2' />
                                    <div className="category-title">Coffee</div>
                                </div>
                            </button>
                        </form>

                        <form onSubmit={handleSearchSubmitSushi}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg three" src={ic3} alt='icon3' />
                                    <div className="category-title">Sushi</div>
                                </div>
                            </button>
                        </form>

                        <form onSubmit={handleSearchSubmitBWS}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg four" src={ic4} alt='icon4' />
                                    <div className="category-title">Beer & Wine & Spirits</div>
                                </div>
                            </button>
                        </form>
                        <form onSubmit={handleSearchSubmitAlex}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg five" src={ic5} alt='icon5' />
                                    <div className="category-title">Ice Cream</div>
                                </div>
                            </button>
                        </form>
                        <form onSubmit={handleSearchSubmitDelivery}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg six" src={ic6} alt='icon6' />
                                    <div className="category-title">Delivery</div>
                                </div>
                            </button>
                        </form>
                        <form onSubmit={handleSearchSubmitPizza}>

                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg seven" src={ic7} alt='icon7' />
                                    <div className="category-title">Pizza</div>
                                </div>
                            </button>
                        </form>
                        <form onSubmit={handleSearchSubmitSoup}>
                            <button className="category-element" type="submit">
                                <div className="category-icon-title-wrapper">
                                    <img className="category-icon-svg eight" src={ic8} alt='icon8' />
                                    <div className="category-title">Soup</div>
                                </div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Categories
