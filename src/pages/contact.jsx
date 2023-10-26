import React from "react";

export default class ContactPage extends React.Component {
    render() {
        return (
        <div class="contactBox">
                <div class="contactDisplay">
                    <h2 class="contactHeader">CONTACT</h2>
                    <p class="contactContent">If you'd like to schedule an interview, reach out through one of the links below or give me a call. I look forward to hearing from you!</p>
                    <h3 class="contactLinks">The best ways to contact me: </h3>
                    <div class="buttonContainer">
                        <a href="mailto: chazcoats2@hotmail.com"><span class="contactBtns"
                                id="emailBtn">EMAIL</span></a>
                        <a href="https://github.com/ChazCoats98"><span class="contactBtns"
                                id="githubBtn">GITHUB</span></a>
                        <a href="https://www.linkedin.com/in/chaz-coats-9a333b290"><span class="contactBtns"
                                id="linkedinBtn">LINKEDIN</span></a>
                    </div>
                </div>
            </div>
        )
    }
}