import React from 'react';
import { Slide } from 'react-slideshow-image';
import $ from 'jquery';
import 'react-slideshow-image/dist/styles.css';

export default class PortfolioPage extends React.Component {
    jQuerycode = () => {
        $('hideBtn1').hide();
        $('hideBtn2').hide();
        $('hideBtn3').hide();
        $('#infoBtn1').on('click', function(){
            console.log('clicked');
            $('.browserInner').addClass('hideBg');
            $('#project1').fadeIn();
            $('#infoBtn1').hide();
            $('#hideBtn1').show();
        });
        $('#hideBtn1').on('click', function(){
            console.log('clicked');
            $('.browserInner').removeClass('hideBg');
            $('#project1').hide();
            $('#infoBtn1').show();
            $('#hideBtn1').hide();
        });
        $('#infoBtn2').on('click', function(){
            console.log('clicked');
            $('.browserInner').addClass('hideBg');
            $('#project2').fadeIn();
            $('#infoBtn2').hide();
            $('#hideBtn2').show();
        });
        $('#hideBtn2').on('click', function(){
            console.log('clicked');
            $('.browserInner').removeClass('hideBg');
            $('#project2').hide();
            $('#infoBtn2').show();
            $('#hideBtn2').hide();
        });
        $('#infoBtn3').on('click', function(){
            console.log('clicked');
            $('.browserInner').addClass('hideBg');
            $('#project3').fadeIn();
            $('#infoBtn3').hide();
            $('#hideBtn3').show();
        });
        $('#hideBtn3').on('click', function(){
            console.log('clicked');
            $('.browserInner').removeClass('hideBg');
            $('#project3').hide();
            $('#infoBtn3').show();
            $('#hideBtn3').hide();
        });
    }
    componentDidMount() {
        this.jQuerycode();
    }
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
                        <div className='browserInner'>
                        <div className='projectDescription' id='project1'>
                            <div className='projectInner'>
                                <p id='text1'>
                                Groovy Weather is a 70s themed weather app with period correct advertisements and 
                                trending news articles from the current month in the 70s. I designed this app based on 
                                weather apps like Weather Underground and The Weather Channel. However I wanted to do 
                                something a little more unique, hence the 70s theme. Making this app was a chance to 
                                learn about API calls as well as persistent data storage. 
                                </p>
                                <div className='moreInfoBtn' id='hideBtn1'>
                        <p>CLICK TO HIDE</p>
                        </div>
                            </div>
                            </div>
                        <div className='moreInfoBtn' id='infoBtn1'>
                        <p>CLICK FOR MORE INFO</p>
                        </div>
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
                        <div className='browserInner'>
                            <div className='projectDescription' id='project2'>
                                <div className='projectInner'>
                                <p id='text2'>
                                Weather to Watch is an app that picks a movie for you based on the local weather.
                                The app uses geolocation to determine the weather conditions in your area, 
                                then picks a movie thats currently showing in theaters which fits the mood of 
                                the weather. Making this app taught me about geolocation and helped expand upon 
                                my knowledge of 3rd party APIs.
                                </p>
                                <div className='moreInfoBtn' id='hideBtn2'>
                        <p>CLICK TO HIDE</p>
                        </div>
                                </div>
                            </div>
                        <div className='moreInfoBtn' id='infoBtn2'>
                    <p>CLICK FOR MORE INFO</p>
                        </div>
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
                        <div className='browserInner'>
                        <div className='projectDescription' id='project3'>
                            <div className='projectInner'>
                                <p id='text3'>
                                WalletWhiz is a finance tracking app. 
                                It uses Plaid to connect to your bank account to pull live account balance and transaction data. 
                                This project was a way to show off my knowledge of back-end programming. The website uses mySQL to store 
                                user account data, Expressjs for routing, handlebars for serving pages into the browser, and a whole host of other packages.
                                This project taught me a lot about OAUTH authentication.
                                </p>
                                <div className='moreInfoBtn' id='hideBtn3'>
                        <p>CLICK TO HIDE</p>
                        </div>
                            </div>
                            </div>
                            <div className='moreInfoBtn' id='infoBtn3'>
                                <p>CLICK FOR MORE INFO</p>
                            </div>
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