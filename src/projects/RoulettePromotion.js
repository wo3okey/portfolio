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

import { StyleSperator } from '../styles/StyleCommon'
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
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2019.06 - 2020.01</StyleProjectTitle>
                            <StyleProjectTitle>룰렛 프로모션 시스템</StyleProjectTitle>
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
                        <StyleContentsTitle>유연한 설정이 가능한 프로모션 설계구조</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>쿠폰/적립금/경품 등 상품의 스킴에 상관없이 다양하게 상품 설정이 가능한 구조로 설계</StyleContent>
                            <StyleContent>시스템 담당자가 프로모션 진행기간과 시간을 유연하게 설정할 수 있도록 스케줄링 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>일평균 20만 사용자의 참여</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>프로모션 정책 저장시 Redis에 상품별 최대당첨갯수와 현재갯수 정보를 저장하며 프로모션 참여시 중복지급여부 및 당첨확률 등의 유효성 검사를 진행</StyleContent>
                            <StyleContent>프로모션의 기본정책, 상품, 스케줄링 정보 등의 immutable 정보는 Memcached를 이용하여 캐싱</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>사용자 어뷰징 방어 처리</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>크로스 체크를 통해 화면(front)과 비즈니스(backend) 어뷰징 방어</StyleContent>
                            <StyleContent>공격적인 다중요청 방어를 위해 스케줄 정보와 사용자 정보를 DB Unique 설정으로 비정상적인 데이터 요청건 방어</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage src={Roulette1} title="티몬데이룰렛1" alt="" />
                            <StyleImage src={Roulette2} title="티몬데이룰렛2" alt="" />
                            <StyleImage src={Roulette3} title="티몬데이룰렛3" alt="" />
                            <StyleImage src={Roulette4} title="티몬데이룰렛4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default RoulettePromotion