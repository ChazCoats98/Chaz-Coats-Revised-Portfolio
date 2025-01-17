import { Link } from 'react-router-dom';

//creates nav component for pages and uses links created with react router dom to navigate to each page
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
                            <Link class="listText" id="aboutNav" to='/'>ABOUT</Link>
                    </li>
                    <li>
                            <Link class="listText" id="projectsNav" to='/portfolio'>PROJECTS</Link>
                    </li>
                    <li>
                            <Link class="listText" id="resumeNav" to='/resume'>RESUME</Link>
                    </li>
                    <li>
                            <Link class="listText" id="contactNav" to='/contact'>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}