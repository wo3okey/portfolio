import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleImages, StyleImage } from "../styles/StyleProjects"

import Inspection1 from "../images/project/inspection1.jpeg"
import Inspection2 from "../images/project/inspection2.jpeg"
import Inspection3 from "../images/project/inspection3.jpeg"
import Inspection4 from "../images/project/inspection4.jpeg"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const Inspection = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.12 - 2022.06</StyleProjectTitle>
                            <StyleProjectTitle>번개케어 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>airflow</StyleBadgeGreen>
                            <StyleBadgeGreen>redash</StyleBadgeGreen>
                            <StyleBadgeGreen>slack api</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>스트레스 없는 중고거래, 번개케어</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>기존 중고커머스 시장에서 볼 수 없던 C2B2C의 중고 거래 시스템 설계 및 개발</StyleContent>
                            <StyleContent>인증 서비스 고도화로 22년4월 서비스 오픈 당시 월 거래 430여건 수준에서 22년12월 월 거래 8000여건 달성</StyleContent>
                            <StyleContent>검수 리드타임 축소를 위한 운영 지원 시스템을 개발로, 입고 대비 당일 출고율 10% → 60%로 개선</StyleContent>

                        </StyleContents>
                        <StyleContentsTitle>전사 규모 범위의 신규 서비스 런칭</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>상품, 검색, 주문/결제, 배송에 연관된 유저, 검수자, 운영자 등을 위한 전사 범위의 API 시스템 개발</StyleContent>
                            <StyleContent>상품 및 주문 시스템에 번개케어 상태 변경에 대한 aws kinesis 이벤트 송/수신 처리</StyleContent>
                            <StyleContent>사업 및 통계 팀 인사이트 지원을 위해 airflow 및 batch task를 통한 번개케어 거래 현황 발송 스케줄 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={Inspection1} title="검수대행1" alt="" />
                            <StyleImage theme={theme} src={Inspection2} title="검수대행2" alt="" />
                            <StyleImage theme={theme} src={Inspection3} title="검수대행3" alt="" />
                            <StyleImage theme={theme} src={Inspection4} title="검수대행4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Inspection