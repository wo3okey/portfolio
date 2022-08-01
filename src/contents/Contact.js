import theme from "../styles/Theme";
import { StyleContactWord, StyleMail, StyleThanks } from "../styles/StyleContact"

const Contact = () => {
    return (
        <div>
            <footer id="footer">
                <StyleThanks theme={theme}>읽어주셔서 감사합니다.</StyleThanks>
                <StyleContactWord theme={theme}>contact. </StyleContactWord><StyleMail theme={theme}>anbriaao@naver.com</StyleMail>
                <ul class="copyright">
                    <li>&copy; wookey</li>
                    <li>Developer. since 2017</li>
                </ul>
            </footer>
        </div>
    );
}

export default Contact;