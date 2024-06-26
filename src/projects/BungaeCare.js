import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import BungaeCare1 from "../images/project/bungaecare1.jpeg"
import BungaeCare2 from "../images/project/bungaecare2.jpeg"
import BungaeCare3 from "../images/project/bungaecare3.jpeg"
import BungaeCare4 from "../images/project/bungaecare4.jpeg"

const BungaeCare = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2022.08 - 2023.08</StyleProjectTitle>
                            <StyleProjectTitle>홈 하이엔드 탭</StyleProjectTitle>
                            <StyleBadgeGreen>kotlin 1.9.x</StyleBadgeGreen>
                            <StyleBadgeGreen>spring boot 3.2.x</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql 8.x</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch 7.x</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>모델 단위의 탐색, 하이엔드 탭</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>브랜드, 모델 등 단위의 큐레이션 기능 API 및 큐레이션 어드민 관리 시스템 API 개발</StyleContent>
                            <StyleContent>카테고리, 브랜드, 유형, 컬렉션, 단일 모델 등의 검색 자동완성 및 검색어 추천을 통해 비목적 탐색 지원 API 개발</StyleContent>
                            <StyleContent>통합, 키워드 검색 및 페이징, 필터, 정렬 등이 포함된 모델 검색 시스템 전반의 API 개발 </StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>앱 첫 화면 서비스로 발전</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>앱 전체 통합 검색 및 하이엔드 홈 탭 검색 시스템을 통해 GMV 80억 이상의 번개케어 유료 거래 성장</StyleContent>
                            <StyleContent>홈 트래픽 전환을 통해 약 65req/s 요청에 대해 평균 10ms 응답속도로 안정적으로 시스템 운영</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={BungaeCare1} title="번개케어1" alt="" />
                            <StyleImage theme={theme} src={BungaeCare2} title="번개케어2" alt="" />
                            <StyleImage theme={theme} src={BungaeCare3} title="번개케어3" alt="" />
                            <StyleImage theme={theme} src={BungaeCare4} title="번개케어4" alt="" />
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