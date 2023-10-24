import React from "react";

export default class ResumePage extends React.Component {
    render() {
        return (

        <div>
        <div class="languageInfoBox">
        <div class="languageInfoDisplay">
            <h2 class="languageText" id="resume1">I've worked in a variety of different industries. 
                Through these industries I've interacted with a plethora of software and company websites which have taught me a lot about intuitive UI design and what works and doesn't work in relation to software design.</h2>
            <h2 class="languageText" id="resume2">Coding languages I'm familiar with:</h2>
            <ul class="languagesList">
                <li id="lang1">I'm proficient with HTML, CSS, and JavaScript for front end development.</li>
                <li id="lang2">I'm proficient with a variety of CSS and JavaScript frameworks (Bootstrap, Tailwind, JQuery, Vue, Svelte, Angular, ETC)</li>
                <li id="lang3">I'm proficient with node.js and its packages for server side development (Express, React, Jest, ETC)</li>
                <li id="lang4">I have a working knowledge of mySQL for database creation and management.</li>
                <li id="lang5">I have a working knowledge of Python for automation.</li>
                <div class="buttonBox">
                    <h2 class="displayButton" id="seeResume">SEE RESUME</h2>
                </div>
            </ul>
        </div>
    </div>
    <div class="resumeBox">
        <div class="resumeDisplay">
            <div class="resumeBg">
                <h2 class="resumeText" id="resumeHeader">RESUME</h2>
                <div class="resumeDisplayInner">
                    <h3 class="resumeText" id="workExperienceHeader">Relevant Work Experience</h3>
                    <h4 class="resumeText">Quality Engineer/Auditor</h4>
                    <h5 class="resumeText">Budney Industries</h5>
                    <h5 class="resumeText">July 2022 - Present</h5>
                    <ul class="resumeText">
                        <li>Implemented creative solutions to fix/improve production processes in order to make
                            better products.</li>
                        <li>Tracked, documented, and analyzed important process data in order to identify and
                            correct production process breakdowns.</li>
                        <li>Worked with shop floor and 3rd party suppliers to correct manufacturing processes
                            when a non-conforming product was produced.</li>
                        <li>Audited the shop floor and 3rd party suppliers to ensure that AS9100D standards were
                            being upheld.</li>
                        <li>Managed and trained new Quality Engineers to track key product characteristics,
                            maintain continuous improvement audits, and identify potential process improvements.
                        </li>
                    </ul>
                    <h4 class="resumeText">Sales and Service Manager</h4>
                    <h5 class="resumeText">Firestone Complete Auto Care</h5>
                    <h5 class="resumeText">January 2020 - July 2022</h5>
                    <ul class="resumeText">
                        <li>Oversaw repair jobs on customer vehicles to ensure they were getting completed
                            properly and on time.</li>
                        <li>Managed and trained new technicians and sales associates.</li>
                        <li>Handled financial books and used software to track and report earnings trends.</li>
                        <li>Assisted technicians with vehicle repairs when needed.</li>
                    </ul>
                    <h3 class="resumeText" id="educationHeader">Education</h3>
                    <ul class="resumeText">
                        <li>
                            <h5 class="educationSections" id="edu1">Full Stack Web Developer Bootcamp</h5>
                            <h5 class="educationSections">UConn School of Engineering</h5>
                            <h5 class="educationSections">May 2023 - Present</h5>
                        </li>
                        <li>
                            <h5 class="educationSections" id="edu2">AS9100D Internal Auditor Training</h5>
                            <h5 class="educationSections">Central Connecticut State University</h5>
                            <h5 class="educationSections">March 2023</h5>
                        </li>
                        <li>
                            <h5 class="educationSections" id="edu3">Mechanical Engineering</h5>
                            <h5 class="educationSections">Wichita State University</h5>
                            <h5 class="educationSections">August 2017 - May 2019</h5>
                            <h5 class="educationSections">Though I went to school for Mechanical Engineering, I
                                never graduated. I knew I wanted to be an Engineer but I realized Mechanical
                                Engineering wasn't my field. </h5>
                        </li>
                        <div class="buttonBox">
                            <h2 class="displayButton" id="seeLanguages">SEE PROGRAMMING LANGUAGES</h2>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
        )
    }
}