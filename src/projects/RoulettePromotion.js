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
                            <StyleBadgeGreen>MSA</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>유연한 운영이 가능한 룰렛 프로모션</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>프로모션 진행 기간과 시간을 선택하여, 즉시 및 예약 설정이 가능하도록 개발</StyleContent>
                            <StyleContent>쿠폰 및 적립금 지급 시스템을 통해 당첨된 혜택을 즉시 또는 예약 지급이 가능하도록 개발</StyleContent>
                            <StyleContent>운영자가 룰렛 등록, 운영, 현황 관리 등의 작업을 수행할 수 있는 어드민 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>일평균 30만 사용자의 참여</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>하루 평균 30만 정도의 사용자 참여와 평균 응답속도 10ms 이내 안정적인 시스템 운영</StyleContent>
                            <StyleContent>경품별 최대 당첨 가능 개수와 현재 당첨된 개수 정보는 redis, 최종 당첨 정보는 RDB로 저장 및 개발</StyleContent>
                            <StyleContent>프로모션 정책, 상품, 스케줄링 등 변경이 거의 없는 정보는 memcached를 활용하여 개발</StyleContent>
                            <StyleContent>비정상적인 공격과 다중 요청을 방지하기 위해, 스케줄과 사용자 정보에 unique key index설정</StyleContent>
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