import Me from './Me'
import Major from './Major'
import Skills from './Skills'
import Projects from './Projects'
import LookBack from './LookBack'
import Class from './Class'
import Contact from './Contact'
import { StyleSperator } from '../styles/StyleCommon'

const Contents = () => {
    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <Me></Me>
                <StyleSperator></StyleSperator>

                <Major></Major>
                <StyleSperator></StyleSperator>

                <Skills></Skills>
                <StyleSperator></StyleSperator>

                <Projects></Projects>
                <StyleSperator></StyleSperator>

                <Class></Class>
                <StyleSperator></StyleSperator>

                <LookBack></LookBack>
                <StyleSperator></StyleSperator>

                <Contact></Contact>
            </div>
        </div>
    );
}

export default Contents;