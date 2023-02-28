import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const VerticalAdmin = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.08 - 2022.08</StyleProjectTitle>
                            <StyleProjectTitle>버티컬 서비스 어드민 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS-kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>운영자, 검수자를 위한 어드민 시스템</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>검수대행 시스템 주문, 입고, 정산 등의 관리 시스템 개발</StyleContent>
                            <StyleContent>검수대행 모델별 주문현황, 일자별 주문현황 등 모니터링 가능한 대시보드 개발</StyleContent>
                            <StyleContent>카탈로그 시스템 카테고리, 모델 관리 등의 관리 시스템 개발</StyleContent>
                            <StyleContent>각 사용자별 role(권한)을 분리하여 기능별 권한 적용 및 개발</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default VerticalAdmin