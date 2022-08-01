import theme from "../styles/Theme";
import { StyleWookey } from "../styles/StyleMe"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Me = () => {
    return (
        <div>
            <StyleDivision>Wookey</StyleDivision>
            <blockquote>
                <StyleWookey theme={theme}>직관적이고 유연한 설계로 깔끔하고 아름다운 코드를 짜고 싶은 개발자입니다.</StyleWookey>
            </blockquote>
            <StyleSperator></StyleSperator>
        </div>
    )
}

export default Me

