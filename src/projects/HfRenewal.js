import { StyleProject } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"
import { StyleImages } from "../styles/StyleProjects"
import { StyleProjectImage } from "../styles/StyleProjects"
import { StyleImage } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import Project5 from "../images/project/project5.png"

const HfRenewal = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            2020.04 - 2021.07<br></br>
                            한국주택금융공사 차세대 시스템<br></br>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>oracle</StyleBadgeGreen>
                            <StyleBadgeGreen>web square</StyleBadgeGreen>
                            <StyleBadgeGreen>pro object</StyleBadgeGreen>
                            <StyleBadgeGreen>FEP</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>580억 규모의 한국주택금융공사(HF) 차세대 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>주택신용보증팀(주신보)의 개인보증 업무 담당</StyleContent>
                            <StyleContent>전세반환보증, 보증인변경, 보증료수납관리 등 개인 관련 보증 업무 시스템 개발</StyleContent>
                            <StyleContent>신용평가 룰 개발 및 법 개정사항 반영</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>대외 금융시스템 연계 구성을 위한 전문 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>공사(HF)로부터 은행(BANK), 주택도시기금(HUG), 중앙평가원(JAA), 한국감정원(KAB) 등 FEP 대외기관의 시스템 인터페이스 전문 송수신 시스템 개발</StyleContent>
                            <StyleContent>MMS(Multi Manager System)와 MAC(Multi Channel Architecture)를 통한 대내 시스템 연계</StyleContent>
                            <StyleContent>FEP(Front-End Processor) I/F(interface)를 통해 각 대외기관과의 시스템 전문 통신</StyleContent>
                            <StyleContent>전문 송수신 구조를 추상화하고 각각의 전문 시스템을 구현화 함으로써 일관성 있고 유연한 구조로 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleProjectImage src={Project5} title="티몬데이룰렛1" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default HfRenewal