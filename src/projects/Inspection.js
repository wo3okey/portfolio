import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleImages, StyleImage } from "../styles/StyleProjects"

import Inspection1 from "../images/project/inspection1.png"
import Inspection2 from "../images/project/inspection2.png"
import Inspection3 from "../images/project/inspection3.png"
import Inspection4 from "../images/project/inspection4.png"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const Inspection = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.12 - 2022.06</StyleProjectTitle>
                            <StyleProjectTitle>검수대행 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>parameter store</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>airflow</StyleBadgeGreen>
                            <StyleBadgeGreen>redash</StyleBadgeGreen>
                            <StyleBadgeGreen>slack api</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>중고거래 시장의 신드롬</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>기존 중고커머스 시장에서 볼 수 없던 C2B2C 거래 시스템 개발</StyleContent>
                            <StyleContent>검수 입출고 운송장 추적, 상품 QR센싱 처리 등 운영 편의 및 검수 리드타임 축소를 위한 시스템 개발</StyleContent>
                            <StyleContent>사용자 클라이언트, 검수자들을 위한 검수앱, 운영자 어드민 지원 API 개발</StyleContent>

                        </StyleContents>
                        <StyleContentsTitle>전사 범위의 신규 서비스 런칭</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>기존 번개장터 C2C 거래시스템에서 C2B2C로 확대하여 상품, 검색, 결제, 배송까지 전사 범위의 시스템 개발</StyleContent>
                            <StyleContent>검수정보 변경에 대해 상품 및 주문 서비스에 aws kinesis 이벤트 발행</StyleContent>
                            <StyleContent>airflow 및 batch task를 통한 영업일 기준 미발송처리, 미응답처리, 인증거래현황 발송 등의 스케줄 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={Inspection2} title="검수대행2" alt="" />
                            <StyleImage theme={theme} src={Inspection4} title="검수대행4" alt="" />
                            <StyleImage theme={theme} src={Inspection1} title="검수대행1" alt="" />
                            <StyleImage theme={theme} src={Inspection3} title="검수대행3" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Inspection