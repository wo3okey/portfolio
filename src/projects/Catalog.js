import { StyleProject } from "../styles/StyleProjects"
import { StyleProjectTitle } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"

import { StyleImages } from "../styles/StyleProjects"
import { StyleImage } from "../styles/StyleProjects"

import Catalog1 from "../images/project/catalog1.png"
import Catalog2 from "../images/project/catalog2.png"
import Catalog3 from "../images/project/catalog3.png"
import Catalog4 from "../images/project/catalog4.png"


import { StyleBadgeGreen } from '../styles/StyleCommon'
import { StyleSperator } from '../styles/StyleCommon'

import Project2 from "../images/project/project2.JPG"

const Catalog = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.08 - 2021.11</StyleProjectTitle>
                            <StyleProjectTitle>카탈로그 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>parameter store</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>상품의 상위 개념 카탈로그 모델 도입</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>상품을 응집화 할 수 있는 카탈로그 모델을 만들고 기존의 상품 서비스에 연결 및 개발</StyleContent>
                            <StyleContent>모델은 카테고리 및 브랜드 조합 단위 하위 개념에 속하며, 서비스 확장에 유연할 수 있도록 설계 및 개발</StyleContent>
                            <StyleContent>모델의 하위 속성 및 각 속성별 옵션 구조 설계 및 개발</StyleContent>
                            <StyleContent>발매가, 현재 시세 등 모델의 가격 변동을 확인할 수 있는 서비스 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>모델 탐색기 검색 서비스 지원</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>elasticsearch를 활용하여 카탈로그 모델 alias, template 관리 및 데이터 indexing</StyleContent>
                            <StyleContent>모델명 부분 검색, 모델고유번호(SKU) 검색, 키워드 검색 등 다양한 니즈의 검색 지원 및 개발</StyleContent>
                            <StyleContent>pagination(size, from) 및 infinite scroll(sort, after)를 활용하여 페이징 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleImages>
                        <StyleImage src={Catalog3} title="카탈로그3" alt="" />
                            <StyleImage src={Catalog4} title="카탈로그4" alt="" />
                            
                            <StyleImage src={Catalog2} title="카탈로그2" alt="" />
                            <StyleImage src={Catalog1} title="카탈로그1" alt="" />
                            
                            
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Catalog