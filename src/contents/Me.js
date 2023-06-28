import theme from "../styles/Theme";
import { StyleWookey } from "../styles/StyleMe"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Me = () => {
    return (
        <div>
            <StyleDivision>Wookey🧑‍💻</StyleDivision>
            <blockquote>
                <StyleWookey theme={theme}>
                    <div>직관적이고 유연한 설계로, 깔끔하고 쉬운 코드를 작성하고 싶은 개발자입니다.</div>
                </StyleWookey>
            </blockquote>
        </div>
    )
}

export default Me

