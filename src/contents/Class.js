import theme from "../styles/Theme";
import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"
import { StyleDivision } from '../styles/StyleCommon'

const Class = () => {
    return (
    <div>
<StyleDivision>교육 경험이 있어요</StyleDivision>

    <StyleProject>
        <StyleContentsArea theme={theme}>
            <StyleContentsLeft>
                <blockquote>
                    <StyleProjectTitle>2023.09.25~27</StyleProjectTitle>
                    <StyleProjectTitle>서울시 x 신한투자증권</StyleProjectTitle>
                </blockquote>
            </StyleContentsLeft>
            <StyleContentsRight>
                <StyleContent>신한투자증권 프로 아카데미 클라우드ICT 개발자 양성 과정 중 spring part 강의</StyleContent>
                <StyleContent>spring, JPA, test, security, deploy 등 의 기초부터 배포까지 27시간 실무 강의</StyleContent>
            </StyleContentsRight>
        </StyleContentsArea>
    </StyleProject>

    <StyleProject>
        <StyleContentsArea theme={theme}>
            <StyleContentsLeft>
                <blockquote>
                    <StyleProjectTitle>2016.05~2021.09</StyleProjectTitle>
                    <StyleProjectTitle>microsoft x 미담장학회</StyleProjectTitle>
                </blockquote>
            </StyleContentsLeft>
            <StyleContentsRight>
                <StyleContent>저소득 계층 아동 코딩 교육 봉사</StyleContent>
                <StyleContent>컴퓨터 없이 이해하는 코딩의 이론 및 방법 교육</StyleContent>
            </StyleContentsRight>
        </StyleContentsArea>
    </StyleProject>

    <StyleProject>
        <StyleContentsArea theme={theme}>
            <StyleContentsLeft>
                <blockquote>
                    <StyleProjectTitle>2016.03~2016.06</StyleProjectTitle>
                    <StyleProjectTitle>금오공과대학교 x 학술동아리 셈틀꾼</StyleProjectTitle>
                </blockquote>
            </StyleContentsLeft>
            <StyleContentsRight>
                <StyleContent>학술 동아리 후배 대상 교내 교육 강의</StyleContent>
                <StyleContent>java 프로그래밍 교육 강의 및 멘토</StyleContent>
            </StyleContentsRight>
        </StyleContentsArea>
    </StyleProject>
    </div>
    );
}

export default Class;

