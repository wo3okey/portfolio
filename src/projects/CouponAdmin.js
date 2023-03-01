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
                        <StyleContentsTitle>쿠폰의 수 많은 정책 정보 관리</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>쿠폰 단건, 일괄, 발급 등을 지원할 수 있는 어드민 시스템 개발</StyleContent>
                            <StyleContent>쿠폰 데이터 용도에 따라 mysqlDB, redis, couchbase, rabbitMQ 등의 미들웨어 활용</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>레거시 관리</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>60개 이상의 변동되는 쿠폰 정책의 무분별 로직들을 캡슐화하고 역할과 책임을 기반으로 레거시 코드 관리</StyleContent>
                            <StyleContent>쿠폰 정책을 TDD/BDD 기반으로 단일 책임 수준의 검증이 가능하도록 리펙토링</StyleContent>
                            <StyleContent>최대 60s이 소요된 레거시 어드민 관리 페이지를 10ms 수준으로 리펙토링</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default CouponAdmin