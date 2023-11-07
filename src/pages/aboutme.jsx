import React from "react";
import Slide from 'react-reveal/Slide';
import selfImage from '../assets/me.jpg';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div class="pageBox">
                <div class="aboutMeBox">
                    <Slide left>
                    <div className="pictureFrame">
                        <img className="personalPhoto" src={selfImage} alt="the portfolio creator" />
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="moreInfoBox">
                        <div className="upperInfoBox">
                        <h2 className="moreInfoText" id="intro">HI IM</h2>
                        <h2 className="moreInfoText" id="name">CHAZ</h2>
                        </div>
                        <p className="moreInfoText" id="bodyText">I'M AN ENGINEER/WEB DEVELOPER THAT SPECIALIZES IN REACT, NODE, SQL, JAVASCRIPT, HTML, AND CSS.
                            I LOVE MAKING THINGS THAT PEOPLE INTERACT WITH IN A POSITIVE WAY. </p>
                    </div>
                    </Slide>
                </div>
            </div>
            
        );
    }
}