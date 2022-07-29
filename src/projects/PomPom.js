import { StyleProject } from "../styles/StyleProjects"
import { StyleProjectTitle } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"
import { StyleImages } from "../styles/StyleProjects"
import { StyleImage } from "../styles/StyleProjects"

import { StyleSperator } from '../styles/StyleCommon'
import { StyleBadgeGreen } from '../styles/StyleCommon'

import PomPom1 from "../images/project/pompom1.png"
import PomPom2 from "../images/project/pompom2.png"
import PomPom3 from "../images/project/pompom3.png"
import PomPom4 from "../images/project/pompom4.png"
import Project3 from "../images/project/project3.JPG"

const PomPom = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2020.03 - 2020.06</StyleProjectTitle>
                            <StyleProjectTitle>교내 SNS POMPOM</StyleProjectTitle>
                            <StyleBadgeGreen>node js</StyleBadgeGreen>
                            <StyleBadgeGreen>express</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>angular js</StyleBadgeGreen>
                            <StyleBadgeGreen>python</StyleBadgeGreen>
                            <StyleBadgeGreen>selenium</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>교내 학생 중심의 사용자 서비스 구조</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>관심사를 기반으로 서로 연결할 수 있는 SNS형태의 시스템 개발 및 약 600여명 사용자 확보</StyleContent>
                            <StyleContent>웹크롤링으로 학식당, 기숙사식당 등의 식단정보 수집 및 버스도착 정보를 제공할 수 있는 유용한 서비스 개발</StyleContent>
                            <StyleContent>포스팅시 기재하는 해쉬태그 및 가입시 등록된 관심사 기반으로 친구추천 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>빠르고 안전한 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent> NodeJs Express 모듈을 활용하여 비동기 이벤트 기반으로 빠르게 응답가능한 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage src={PomPom4} title="pompom4" alt="" />
                            <StyleImage src={PomPom2} title="pompom2" alt="" />
                            <StyleImage src={PomPom1} title="pompom1" alt="" />
                            <StyleImage src={PomPom3} title="pompom3" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default PomPom