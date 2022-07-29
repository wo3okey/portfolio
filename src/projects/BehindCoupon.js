import { StyleProject } from "../styles/StyleProjects"
import { StyleProjectTitle } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'
import { StyleSperator } from '../styles/StyleCommon'

import Project2 from "../images/project/project2.JPG"

const BehindCoupon = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2019.03 - 2019.05</StyleProjectTitle>
                            <StyleProjectTitle>비하인드 쿠폰 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>hive</StyleBadgeGreen>
                            <StyleBadgeGreen>hadoop</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>대용량 개인화 데이터 처리 및 비하인드 쿠폰 발급 시스템 개발</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>고객마케팅팀과의 협업을 통해 Hive에 적게는 몇만, 많게는 천만건 이상의 개인화 타겟 데이터 인입</StyleContent>
                            <StyleContent>Hive 저장소에 있는 원천데이터는 배치를 통해 Redis로 이관하여 중간테이블 데이터로 활용</StyleContent>
                            <StyleContent>Redis의 타겟 데이터를 기반으로 쿠폰발급API를 호출하여 비하인드 쿠폰을 발급하는 배치 시스템 개발</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>쿠폰 데이터 저장소 효율성 및 사용율 증가</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>쿠폰 테이블 내 사용되지않는 dummy data 감소로 인한 쿠폰 데이터 효율성 증가</StyleContent>
                            <StyleContent>깜짝쿠폰 운영으로 쿠폰 이벤트 운영 지원 가능 및 구매효율 증대 효과에 기여</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default BehindCoupon