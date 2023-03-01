import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

const BehindCoupon = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2019.03 - 2019.05</StyleProjectTitle>
                            <StyleProjectTitle>비하인드 쿠폰</StyleProjectTitle>
                            <StyleBadgeGreen>spring batch</StyleBadgeGreen>
                            <StyleBadgeGreen>java</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>hive</StyleBadgeGreen>
                            <StyleBadgeGreen>hadoop</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>대량의 개인화 쿠폰 발급</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>개인화된 깜짝 쿠폰(비하인드) 시스템 운영으로 상품 구매 효율 증대에 기여</StyleContent>
                            <StyleContent>고객 마케팅 팀으로부터 적게는 몇만, 많게는 3000만건 이상의 개인화 쿠폰 발급 대상 정보를 hive 저장소로 인입</StyleContent>
                            <StyleContent>hive 저장소에 있는 원천 데이터는 batch 시스템을 통해 redis로 이관 및 중간 테이블 데이터로 활용</StyleContent>
                            <StyleContent>redis의 타겟 데이터를 기반으로 partition을 나누어 batch로 쿠폰 bulk 발급</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default BehindCoupon