import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"
import { StyleBadgeGreen } from '../styles/StyleCommon'

import Roulette1 from "../images/project/roulette1.png"
import Roulette2 from "../images/project/roulette2.png"
import Roulette3 from "../images/project/roulette3.png"
import Roulette4 from "../images/project/roulette4.png"
import Project4 from "../images/project/project4.JPG"

const RoulettePromotion = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2019.06 - 2020.01</StyleProjectTitle>
                            <StyleProjectTitle>룰렛 프로모션</StyleProjectTitle>
                            <StyleBadgeGreen>spring mvc</StyleBadgeGreen>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>angular js</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>memcached</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>mybatis</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>유연한 설정이 가능한 룰렛 프로모션</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>쿠폰/적립금/상품 등 다양한 경품 설정이 가능하며, 경품 대상 시스템과 연동하여 즉시 및 예약 지급 가능하도록 개발</StyleContent>
                            <StyleContent>프로모션 진행 기간, 시간을 유연하게 설정할 수 있고 예약 설정이 가능하도록 스케줄링 시스템 개발</StyleContent>
                            <StyleContent>운영자를 위한 룰렛 등록, 운영, 현황 관리 등의 어드민 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>일평균 30만 사용자의 참여</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>경품별 최대 당첨 개수 및 현재 당첨 개수 정보를 redis에 저장하며, 최종 당첨 정보는 DB에 관리 되도록 설계</StyleContent>
                            <StyleContent>프로모션 정책, 상품, 스케줄링 정보 등 immutable 정보는 memcached 활용</StyleContent>
                            <StyleContent>스케줄&사용자 정보를 unique key 설정하여 비정상적인 공격 및 다중 요청 방어</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={Roulette1} title="티몬데이룰렛1" alt="" />
                            <StyleImage theme={theme} src={Roulette2} title="티몬데이룰렛2" alt="" />
                            <StyleImage theme={theme} src={Roulette3} title="티몬데이룰렛3" alt="" />
                            <StyleImage theme={theme} src={Roulette4} title="티몬데이룰렛4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default RoulettePromotion