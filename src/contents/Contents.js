import Me from './Me'
import Major from './Major'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Contents = () => {
    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <Me></Me>
                <Major></Major>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default Contents;