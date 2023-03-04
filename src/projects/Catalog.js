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
                            <StyleContent>상품을 모델 단위로 집합화 할 수 있는 카탈로그 모델 시스템 설계 및 개발</StyleContent>
                            <StyleContent>모델 정보 변경 시 kinesis 이벤트를 전송하여 상품 및 검색 시스템에서의 색인 지원</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>모델 검색 서비스 지원</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>elasticsearch에 모델 정보 색인 및 template, alias 등 ES 관리 API 개발</StyleContent>
                            <StyleContent>모델의 부분명, 고유번호, 키워드 등 다양한 검색 요건과 정렬, 페이징 기능을 지원하는 모델 탐색기 API 개발</StyleContent>
                            <StyleContent>검색 시스템과 연동하여 모델별 다양한 요건의 상품을 모아볼 수 있는 서비스 페이지 API개발</StyleContent>
                            <StyleContent>주문 시스템 이벤트 수신 처리에 따라 모델별 거래 체결가 및 평균 거래 가격 정보를 제공 API 개발 </StyleContent>
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