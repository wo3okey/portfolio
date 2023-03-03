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
                            <StyleProjectTitle>번개케어</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>querydsl</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS-kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>airflow</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>스트레스 없는 중고거래, 번개케어</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>기존의 번개장터, 중고 커머스의 C2C 시장에서 볼 수 없던 C2B2C 중고상품 캐어 시스템</StyleContent>
                            <StyleContent>인증 서비스 고도화로 22년4월 서비스 오픈 당시 월 거래 430여건 수준에서 22년12월 8000여건의 유료 거래 달성</StyleContent>
                            <StyleContent>검수 리드타임 축소를 위한 운영 지원 시스템을 개발을 통해 입고 대비 당일 출고율 10% → 60% 이상 개선</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>전사 규모의 신규 서비스 런칭</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>상품, 검색, 주문/결제/배송 등에 연관된 유저, 검수자, 운영자를 위한 전사 범위의 API 시스템 개발</StyleContent>
                            <StyleContent>상품 및 주문/결제/배송 시스템으로부터 번개케어 상품 상태 변경을 위한 kinesis 이벤트 송/수신 처리</StyleContent>
                            <StyleContent>사업 및 통계 팀 인사이트 지원을 위해 airflow, batch task 등을 활용하여 번개케어 거래현황 발송 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>상품명/카테고리 기반의 카탈로그 모델 추천</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>elasticsearch를 활용하여 80~90% 이상 정확도의 상품명/카테고리 기반 모델 추천 API 개발(비정상 상품명 제외)</StyleContent>
                            <StyleContent>상품명 분리의 tokenizer, 모델명 분석의 검색 analyzer를 적절하게 적용하여 추천 정확도 조정</StyleContent>
                            <StyleContent>모델 field에 따라 적절한 filter, match query 및 minimum_should_match, boost 등 속성을 통해 추천 정확도 조정</StyleContent>
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