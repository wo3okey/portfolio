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
                            <StyleProjectTitle>케어관 서비스</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>번개케어 상품을 모아보는 케어관</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>번개케어가 가능한 상품 및 모델을 모아볼 수 있는 서비스 페이지 API 개발</StyleContent>
                            <StyleContent>client side에서 최소한의 API end-point로 다양한 요구사항을 처리할 수 있는, 유연한 형태의 시스템 설계 및 개발</StyleContent>
                            <StyleContent>elasticsearch 색인 정보 및 after 페이징 방식을 활용하여 상품, 모델 정보 각각 infinite scroll 지원</StyleContent>
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