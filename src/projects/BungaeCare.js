import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

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
                            <StyleProjectTitle>2022.08 - 2022.12</StyleProjectTitle>
                            <StyleProjectTitle>케어관</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS-kinesis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>번개케어 상품을 모아보는 케어관</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>번개케어가 가능한 상품 및 모델을 모아볼 수 있는 서비스 페이지 API 개발</StyleContent>
                            <StyleContent>클라이언트 측에서 최소한의 API 엔드포인트로 다양한 요구사항을 처리할 수 있도록 유연한 API 설계 및 개발</StyleContent>
                            <StyleContent>elasticsearch의 색인 정보와 after 페이징을 이용하여 상품 및 모델 정보에 대한 무한 스크롤 기능 개발</StyleContent>
                            <StyleContent>카테고리, 브랜드, 상품, 모델 등 다양한 타입의 버블 타입을 지원하는 큐레이션 시스템 유지보수 및 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={BungaeCare1} title="번개케어1" alt="" />
                            <StyleImage theme={theme} src={BungaeCare2} title="번개케어2" alt="" />
                            <StyleImage theme={theme} src={BungaeCare3} title="번개케어3" alt="" />
                            <StyleImage theme={theme} src={BungaeCare4} title="번개케어4" alt="" />
                        </StyleImages>

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default BungaeCare