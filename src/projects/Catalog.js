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
                            <StyleContent>모델 정보 변경에 따른 kinesis 이벤트 송신을 통해 상품, 검색 시스템에 색인 지원</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>모델 검색 서비스 지원</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>elasticsearch에 모델 정보 색인, template 및 alias 관련 ES 관리 API 개발</StyleContent>
                            <StyleContent>elasticsearch를 활용하여 모델명, 고유번호, 키워드 검색 등 다양한 검색 요건을 지원할 수 있는 모델 탐색기 API개발</StyleContent>
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