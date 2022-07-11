import * as ps from "../styles/StyleProjects"
import { Sperator } from '../styles/StyleCommon'
import Project2 from "../images/project/project2.JPG"

const BehindCoupon = () => {
    return (
        <div>
            <section className="major">
                <header className="major">

                    <h3>비하인드 쿠폰 시스템</h3>
                    <p>
                        <ps.SubTitle>비하인드 쿠폰은 뒤에서 사용자 몰래 주어지는 쿠폰 시스템을 뜻합니다.</ps.SubTitle>
                        <ps.SubTitle>사용자들의 구매 패턴에 맞춰 대상자 집합을 추출하고 개인화 쿠폰을 발급합니다.</ps.SubTitle>
                    </p>
                </header>
                <div className="projects">
                    <img src={Project2} className="image fit" />
                    <ps.TextLeft>
                        <ps.ContentsTitle>대용량 개인화 데이터 처리 및 비하인드 쿠폰 발급 시스템 개발</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                고객마케팅팀과의 협업을 통해 Hive에 적게는 몇만, 많게는 천만건 이상의 개인화 타겟 데이터 인입
                            </li>
                            <li className="project_contant">
                                Hive 저장소에 있는 원천데이터는 배치를 통해 Redis로 이관하여 중간테이블 데이터로 활용
                            </li>
                            <li className="project_contant">
                                Redis의 타겟 데이터를 기반으로 쿠폰발급API를 호출하여 비하인드 쿠폰을 발급하는 배치 시스템 개발
                            </li>
                        </ul>
                    </ps.TextLeft>

                    <ps.TextLeft>
                        <ps.ContentsTitle>쿠폰 데이터 저장소 효율성 및 사용율 증가</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                쿠폰 테이블 내 사용되지않는 dummy data 감소로 인한 쿠폰 데이터 효율성 증가
                            </li>
                            <li className="project_contant">
                                깜짝쿠폰 운영으로 쿠폰 이벤트 운영 지원 가능 및 구매효율 증대 효과에 기여
                            </li>
                        </ul>
                    </ps.TextLeft>
                </div>
            </section>
            <Sperator></Sperator>
        </div>
    )
}

export default BehindCoupon