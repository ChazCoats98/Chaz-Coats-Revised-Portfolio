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
                            <Link class="listText" id="aboutNav" to='/'>ABOUT</Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link class="listText" id="projectsNav" to='/portfolio'>PROJECTS</Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link class="listText" id="resumeNav" to='/resume'>RESUME</Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link class="listText" id="contactNav" to='/contact'>CONTACT</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}