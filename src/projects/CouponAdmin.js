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
                            <StyleProjectTitle>할인/혜택 쿠폰 어드민 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring mvc</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>angular js</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>memcached</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>mybatis</StyleBadgeGreen>
                            <StyleBadgeGreen>TDD</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>쿠폰의 수 많은 정책 정보 관리 및 시스템 유지보수</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>계속적으로 변동되는 정책에 무분별하게 난무된 로직들의 캡슐화하고, 역할과 책임을 기반으로 수 많은 레거시 코드를 유지관리</StyleContent>
                            <StyleContent>쿠폰의 일괄 생성, 수정, 발급 등을 지원할 수 있도록 일괄 시스템을 개발</StyleContent>
                            <StyleContent>쿠폰의 용도에 따라 MysqlDB, Redis, Couchbase, RabbitMQ 등 활용</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>레거시 프로그램을 TDD, BDD 기반으로 리팩토링</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>Mockito를 활용하여 TDD, BDD 기반으로 대대적인 리펙토링 진행 및 60개가 넘는 쿠폰 정책에 대한 단일 책임 수준의 검증이 가능하도록 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>운영 사용자를 위한 지속적인 성능향상</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>응답시간 1분짜리 0.1초로 만듬</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default CouponAdmin