import theme from "../styles/Theme";
import { StyleSperator, StyleDivision, StyleNoLineSperator } from '../styles/StyleCommon'

import { StyleCopyright, StyleContactWord, StyleMail, StyleThanks } from "../styles/StyleContact"
import { StyleContents, StyleContent } from "../styles/StyleProjects"


const Contact = () => {
    return (
        <div>
            <StyleDivision>그래서 저는요</StyleDivision>
            <StyleContents>
                <StyleContent>MBTI는 회사모드(ESFJ), 일상모드(INFJ)로 일과 일상에 균형있는 스위칭을 잘 하는 편입니다.</StyleContent>
                <StyleContent>개발 뿐 아니라 기획, 운영, 디자인 등 다양한 직무의 사람들과의 커뮤니케이션을 즐기며, 긍/부정적 다양한 의견과 오지랖을 좋아합니다.</StyleContent>
                <StyleContent>서비스, 차세대, 신규, 백오피스, 프로모션, 리펙토링 등 크고 작은 프로젝트 경험이 있습니다.</StyleContent>
                <StyleContent>수동적이고 반복이 많은 비효율적인 업무를 지양하며, 직관적이고 생산적인 업무 설계를 하려 노력합니다.</StyleContent>
                <StyleContent>코드로 대화하는걸 좋아하며, 명확하고 컴팩트 있는 타이핑으로 쉬운 대화를 하려 노력합니다.</StyleContent>
            </StyleContents>

            <footer id="footer">
                <StyleThanks theme={theme}>읽어주셔서 감사합니다.</StyleThanks>
                <StyleContactWord theme={theme}>
                    <a href={"https://wo3okey.github.io/"} target={"_blank"}>blog</a> | <a href={"https://github.com/wo3okey"} target={"_blank"}>github</a> | <a href={"mailto:anbriaao@naver.com"}>email </a>
                    </StyleContactWord>
                <StyleCopyright theme={theme}>wookey  |  Developer. since 2018</StyleCopyright>
            </footer>
        </div>
    );
}

export default Contact;

