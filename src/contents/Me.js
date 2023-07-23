import theme from "../styles/Theme";
import { StyleWookey } from "../styles/StyleMe"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Me = () => {
    return (
        <div>
            <StyleDivision>Wookey🧑‍💻</StyleDivision>
            <blockquote>
                <StyleWookey theme={theme}>
                    <div>직관적이고 유연한 설계로 깔끔하고 쉬운 코드를 작성하고자 노력하며, 이유 있는 코드로 동료들에게 영감을 주는 개발자가 되고 싶습니다.</div>
                </StyleWookey>
            </blockquote>
        </div>
    )
}

export default Me

