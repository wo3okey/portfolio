import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

import Catalog1 from "../images/project/catalog1.jpeg"
import Catalog2 from "../images/project/catalog2.jpeg"
import Catalog3 from "../images/project/catalog3.jpeg"
import Catalog4 from "../images/project/catalog4.jpeg"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const Catalog = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.08 - 2021.11</StyleProjectTitle>
                            <StyleProjectTitle>카탈로그 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS-kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>google-drive-api</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>상품의 집합, 카탈로그 모델</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>상품을 응집화 할 수 있는 카탈로그 모델을 만들고 기존의 상품 시스템과 유연하게 연결한 시스템 설계 및 개발</StyleContent>
                            <StyleContent>모델 정보 변경에 따른 kinesis 이벤트 송/수신을 통해 상품의 모델 정보를 색인 가능하도록 지원</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>모델 검색 서비스 지원</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>모델명 부분 검색, 모델 고유번호 검색, 키워드 검색 등 다양한 검색 요건을 지원할 수 있는 모델 탐색기 API개발</StyleContent>
                            <StyleContent>elasticsearch에 모델 정보 색인 및 template, alias 등의 ES 관리 API 개발</StyleContent>
                            <StyleContent>검색 시스템과 연동하여 모델별 다양한 요건의 상품을 모아볼 수 있는 서비스 페이지 API개발</StyleContent>
                            <StyleContent>주문 시스템 이벤트 수신 처리에 따른 모델별 거래체결, 평균거래가 정보 제공 API개발 </StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={Catalog1} title="카탈로그1" alt="" />
                            <StyleImage theme={theme} src={Catalog2} title="카탈로그2" alt="" />
                            <StyleImage theme={theme} src={Catalog3} title="카탈로그3" alt="" />
                            <StyleImage theme={theme} src={Catalog4} title="카탈로그4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Catalog