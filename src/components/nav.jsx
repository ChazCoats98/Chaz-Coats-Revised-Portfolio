import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <header class="headerBody">
        <div class="headerTop">
            <h1 class="headerText">PORTFOLIO</h1>
        </div>
        <nav class="navigation">
            <div class="horizontalList" id="myNavbar">
                <ul class="listInner">
                    <li>
                        <a>
                            <span class="listText" id="aboutNav" to='/'>ABOUT</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="listText" id="projectsNav" to='/portfolio'>PROJECTS</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="listText" id="resumeNav" to='/resume'>RESUME</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="listText" id="contactNav" to='/contact'>CONTACT</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}