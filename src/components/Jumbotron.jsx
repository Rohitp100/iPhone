import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");  //find element with className as sound-section.
        window.scrollTo({
            top : element?.getBoundingClientRect().top, // position relative to the viewport using getBoundingClientRect(). viewport is visible are of the page
            left : 0,
            behavior : 'smooth' 
        });
    }

    return ( 
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iPhone" />
            <p className="text">Big and bigger.</p>
            <span className="description">From $41.62/mo. for 24 mo. or $999 before trade-in</span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li className="link">
                <a className="link" onClick={handleLearnMore}>Learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
        </div>
     );
}

export default Jumbotron;