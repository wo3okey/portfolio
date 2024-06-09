import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import CareWeek1 from "../images/project/careweek1.jpg"
import CareWeek2 from "../images/project/careweek2.jpg"
import CareWeek3 from "../images/project/careweek3.jpg"
import CareWeek4 from "../images/project/careweek4.jpg"

const BungaeCare = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2023.12 - 2024.07</StyleProjectTitle>
                            <StyleProjectTitle>케어위크 프로모션</StyleProjectTitle>
                            <StyleBadgeGreen>kotlin 1.9.x</StyleBadgeGreen>
                            <StyleBadgeGreen>spring boot 3.2.x</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql 8.x</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>흥해라! 번개케어</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>케어위크 프로모션을 통해 번개케어 일일 GMV 및 거래건수 300% 이상 증가에 기여</StyleContent>
                            <StyleContent>마케팅 비용 대비 최고의 GMV 성장을 이끌며, 프로모션 기간 내 8300%의 투자 효율 기록</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>유연한 프로모션 시스템</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>최소한의 API를 통해 다양한 응모권 지급 및 포인트 지급 스킴을 처리할 수 있도록 유연한 API 개발</StyleContent>
                            <StyleContent>redis를 활용하여 포인트 정책에 따른 참여 제어 및 포인트 지급 타겟 처리</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={CareWeek1} title="케어위크1" alt="" />
                            <StyleImage theme={theme} src={CareWeek2} title="케어위크2" alt="" />
                            <StyleImage theme={theme} src={CareWeek3} title="케어위크3" alt="" />
                            <StyleImage theme={theme} src={CareWeek4} title="케어위크4" alt="" />
                        </StyleImages>
                        {/* <StyleContentsTitle>[회고] 케어관</StyleContentsTitle>
                        <StyleLookBack>
                        비슷하면서도 다양한 지면의 요구사항 및 정책을 클라이언트에서 편하게 개발할 수 있도록 API 설계에 많은 고민을 하였습니다. 
                        요구사항에 대한 기준을 명확히하고 기획 정책에 따른 입력 출력을 정리하여, 최소한의 엔드포인트로 다양한 요구사항을 만족시킬 수 있으며 안정적이고 확장성 있는 API를 개발하였습니다. 
                        최종적으로, 케어관을 통한 번개케어 유료 거래 전환율이 증가하여 GMV가 40% 이상 성장하도록 기여할 수 있었습니다.
                        </StyleLookBack> */}

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default BungaeCare