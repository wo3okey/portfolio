import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import Project5 from "../images/project/project5.png"

const HfRenewal = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                        <StyleProjectTitle>2020.04 - 2021.07</StyleProjectTitle>
                        <StyleProjectTitle>한국주택금융공사(HF) 차세대 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>oracle</StyleBadgeGreen>
                            <StyleBadgeGreen>web square</StyleBadgeGreen>
                            <StyleBadgeGreen>pro object</StyleBadgeGreen>
                            <StyleBadgeGreen>MMS</StyleBadgeGreen>
                            <StyleBadgeGreen>MCA</StyleBadgeGreen>
                            <StyleBadgeGreen>FEP</StyleBadgeGreen>
                            <StyleBadgeGreen>jeus</StyleBadgeGreen>
                            <StyleBadgeGreen>dev eye</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>580억 규모의 한국주택금융공사(HF) 차세대 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>주택신용보증팀(주신보)의 개인보증 업무 프로세스 개발</StyleContent>
                            <StyleContent>전세반환보증, 보증인변경, 보증료수납관리 등 개인 관련 보증 업무 시스템 개발</StyleContent>
                            <StyleContent>신용평가 rule 시스템 개발 및 모형별 법 개정사항 반영</StyleContent>
                            <StyleContent>MMS(Multi Manager System), MCA(Multi Channel Architecture)를 통한 대내외 시스템 연계</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주택신용 보증 전문 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>FEP(Front-End Processor) 시스템의 전문 인터페이스를 통해 각 기관별 전문 송수신 시스템 개발</StyleContent>
                            <StyleContent>개인, 사업자 보증에 필요한 은행, HUG, 중앙평가원, 한국감정원 등의 대외 기관과 FEP 시스템 연결</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleProjectImage theme={theme} src={Project5} title="티몬데이룰렛1" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default HfRenewal