import theme from "../styles/Theme";
import { StyleCopyright, StyleContactWord, StyleMail, StyleThanks } from "../styles/StyleContact"

const Contact = () => {
    return (
        <div>
            <footer id="footer">
                <StyleThanks theme={theme}>읽어주셔서 감사합니다.</StyleThanks>
                <StyleContactWord theme={theme}>contact. </StyleContactWord><StyleMail theme={theme}>anbriaao@naver.com</StyleMail>
                <StyleCopyright theme={theme}>wookey  |  Developer. since 2018</StyleCopyright>
            </footer>
        </div>
    );
}

export default Contact;