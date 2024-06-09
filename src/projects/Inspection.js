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
                            <StyleProjectTitle>2021.12 - 2023.06</StyleProjectTitle>
                            <StyleProjectTitle>번개케어</StyleProjectTitle>
                            <StyleBadgeGreen>kotlin 1.9.x</StyleBadgeGreen>
                            <StyleBadgeGreen>spring boot 3.2.x</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql 8.x</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>aws-kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>airflow</StyleBadgeGreen>
                            <StyleBadgeGreen>redash</StyleBadgeGreen>
                            <StyleBadgeGreen>slack api</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>스트레스 없는 중고거래, 번개케어</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>기존 C2C 중고거래 시장에서 볼 수 없었던 C2B2C 중고상품 케어 시스템 설계 및 개발</StyleContent>
                            <StyleContent>서비스 오픈 당시 월 430건에서 월 8500여 건의 유료 거래를 달성했으며, 매월 12% 이상의 GMV 성장</StyleContent>
                            <StyleContent>검수 리드타임을 단축하기 위해 운영 지원 시스템을 개발하여, 입고 당일 출고율을 10% → 60% 이상으로 개선</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>전사 규모의 신규 서비스 런칭</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>전사적인 범위에서 상품, 검색, 주문/결제/배송 등과 연관된 유저, 검수자, 운영자를 위한 번개케어 API 개발</StyleContent>
                            <StyleContent>상품 및 주문, 결제, 배송 시스템에서 발생하는 kinesis 이벤트를 subscribe 하여 번개케어 상품 상태 변경 처리</StyleContent>
                            <StyleContent>사업 및 통계 팀의 인사이트 지원을 위해 airflow와 배치 작업을 활용한 번개케어 거래현황 발송 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>상품명/카테고리 기반의 모델 추천</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>es query를 적절히 활용하여 비정상 상품명을 제외하고 90% 이상의 정확도를 가진 모델 추천 API 개발</StyleContent>
                            <StyleContent>모델 추천에 적합한 tokenizer와 analyzer를 적용하고, filter 및 match query 옵션을 조정하여 추천 정확도 향상</StyleContent>
                            <StyleContent>하루 평균 4만 건 이상의 추천 서비스 API를 제공하며, 평균 20ms 이하의 안정적인 시스템 운영</StyleContent>
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