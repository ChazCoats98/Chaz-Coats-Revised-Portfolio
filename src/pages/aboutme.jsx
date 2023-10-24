import React from "react";
import { Link } from "react-router-dom";
import "./aboutmeStyles.css";

export default class AboutMe extends React.Component {
    render() {
        return (
            <div class="pageBox">
                <div class="aboutMeBox">
                    <div class="typedBox">
                        <h2 class="typedText" id="hiMessage"></h2>
                        <h2 class="typedText" id="aboutMe"></h2>
                        <h2 class="typedText" id="more"></h2>
                    </div>
                        <div class="moreInfoBox">
                            <img id="personalImage" src="./assets/me.jpg" alt="picture of Chaz Coats"/>
                            <p class="moreInfoText">I'm relatively new to the programming world, however I'm taking to it
                                quickly.
                                Currently I work as a Quality Engineer at an Aerospace company, but I'm looking to do
                                something more creative and exciting.
                                I love making things that people interact with positively and use to improve their
                                day-to-day lives.
                                I got into Quality Engineering because the idea of improving processes to make better, more
                                usable products excites me.
                                Unfortunately the Aerospace industry is bogged down by regulations, making real changes
                                difficult to implement.
                                I've been a hobbyist Software Developer for years but I've only recently started to think about 
                                it as a career. I'm eager to jump into making and deploying practical applications that have real world uses.
                                I'm looking for somewhere I can learn and grow, where I can collaborate with coworkers on
                                interesting and challenging projects, and where I can make programs that positively affect
                                peoples lives.
                                I'f this sounds like your company, please feel free to reach out to me for an interview. I
                                look forward to hearing from you.
                            </p>
                        </div>
                </div>
            </div>
        );
    }
}