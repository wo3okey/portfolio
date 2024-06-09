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
                            <StyleProjectTitle>2021.08 - 2023.08</StyleProjectTitle>
                            <StyleProjectTitle>버티컬 서비스 어드민</StyleProjectTitle>
                            <StyleBadgeGreen>kotlin 1.9.x</StyleBadgeGreen>
                            <StyleBadgeGreen>spring boot 3.2.x</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql 8.x</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>aws-kinesis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>운영자, 검수자를 위한 어드민</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>번개케어 상품의 입출고, 배송, 검수 등을 관리하기 위한 API 어드민 시스템 설계 및 개발</StyleContent>
                            <StyleContent>번개케어 주문현황 및 일자별 검수현황 등을 모니터링할 수 있는 통계 대시보드 API 시스템 개발</StyleContent>
                            <StyleContent>카탈로그 모델 관리 API 개발 및 모델 변경 정보 es 동기화 처리 및 kinesis 이벤트 발행</StyleContent>
                            <StyleContent>모델의 상품 매칭, 시세 관리 어드민 개발을 통한 운영 업무 자동화 지원</StyleContent>
                            <StyleContent>검수앱(mobile) 시스템 지원을 위한 검수항목 및 검수결과 관리를 위한 API 개발</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default VerticalAdmin