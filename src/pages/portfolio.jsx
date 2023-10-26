import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default class PortfolioPage extends React.Component {
    render () {
        return (
            <Slide autoplay = {false}>
                <div className="each-slide-effect">
                <div className='webContainer'>
                <div className='browser'>
                    <div className='browserNav'>
                    <i></i><i></i><i></i>
                    <button id='weatherButton' type='button'>
                    https://chazcoats98.github.io/Chaz-Coats-weather-application/
                    </button>
                    <div className='browserContainer' id='weatherApp'>
                        <div className='moreInfoBtn'>
                        <p>CLICK FOR MORE INFO</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='webContainer'>
                <div className='browser'>
                    <div className='browserNav'>
                    <i></i><i></i><i></i>
                    <button id='weatherButton' type='button'>
                    https://eecmanny.github.io/Weather-To-Watch/
                    </button>
                    <div className='browserContainer' id='weatherWatch'>
                        <div className='moreInfoBtn'>
                    <p>Click for more info</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='webContainer'>
                <div className='browser'>
                    <div className='browserNav'>
                    <i></i><i></i><i></i>
                    <button id='weatherButton' type='button'>
                    https://walletwizzz-e48c873597e2.herokuapp.com/homepage
                    </button>
                    <div className='browserContainer' id='walletWhiz'>
                        <div className='moreInfoBtn'>
                    <p>Click for more info</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </Slide>
        )
    }
}