import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const CouponAdmin = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2018.03 - 2019.03</StyleProjectTitle>
                            <StyleProjectTitle>할인/혜택 쿠폰 어드민</StyleProjectTitle>
                            <StyleBadgeGreen>spring mvc</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>mybatis</StyleBadgeGreen>
                            <StyleBadgeGreen>memcached</StyleBadgeGreen>
                            <StyleBadgeGreen>rabbitMQ</StyleBadgeGreen>
                            <StyleBadgeGreen>couchbase</StyleBadgeGreen>
                            <StyleBadgeGreen>angular js</StyleBadgeGreen>
                            <StyleBadgeGreen>TDD</StyleBadgeGreen>
                            <StyleBadgeGreen>BDD</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>쿠폰의 정책 정보 관리</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>쿠폰 단건 및 일괄 관리, 발급 등을 지원할 수 있는 어드민 시스템 개발</StyleContent>
                            <StyleContent>쿠폰 데이터의 용도에 따라 mysql, redis, couchbase, rabbitMQ 등의 미들웨어 활용</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>레거시 리펙토링</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>60개 이상의 쿠폰 정책 로직을 캡슐화하고 역할과 책임이 명확한 구조로 재설계</StyleContent>
                            <StyleContent>TDD/BDD 기반으로 단일 책임 수준의 검증이 가능하도록 리펙토링</StyleContent>
                            <StyleContent>60초 이상 소요되던 어드민 관리 페이지의 응답시간을 30ms 이하로 개선</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default CouponAdmin