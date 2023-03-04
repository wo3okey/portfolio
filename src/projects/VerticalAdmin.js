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
                            <StyleProjectTitle>버티컬 서비스 어드민</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS-kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>airflow</StyleBadgeGreen>
                            <StyleBadgeGreen>redash</StyleBadgeGreen>
                            <StyleBadgeGreen>slack api</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>운영자, 검수자를 위한 어드민</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>번개케어 상품의 입출고, 배송, 검수 등을 관리하기 위한 API 시스템 설계 및 개발</StyleContent>
                            <StyleContent>번개케어 주문현황 및 일자별 검수현황 등을 모니터링할 수 있는 통계 대시보드 API 시스템 개발</StyleContent>
                            <StyleContent>카탈로그 모델 관리 API 개발 및 elasticsearch에 모델 변경 정보 동기화 처리 및 kinesis 이벤트 발행</StyleContent>
                            <StyleContent>검수자가 사용하는 검수앱(mobile) 시스템에서 필요한 검수항목 및 검수결과 관리를 위한 API 개발</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default VerticalAdmin