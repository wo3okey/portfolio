import * as ps from '../styles/StyleProjects'
import { Sperator } from '../styles/StyleCommon'
import Project1 from "../images/project/project1.JPG"

const CouponAdmin = () => {
    return (
        <div>
            <section className="major">
                <header className="major">
                    <h3>할인/혜택 쿠폰 어드민 시스템</h3>
                    <p>
                        <ps.SubTitle>내부 직원 및 관리자들이 사용하는 할인/혜택 어드민 시스템입니다.</ps.SubTitle>
                        <ps.SubTitle>쿠폰, 즉시할인, 프로모션 등 마케팅 시스템을 지원합니다.</ps.SubTitle>
                    </p>
                </header>
                <div className="projects">
                    <img src={Project1} className="image fit" />
                    <ps.TextLeft>
                        <ps.ContentsTitle>쿠폰의 수 많은 정책 정보 관리 및 시스템 유지보수</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">계속적으로 변동되는 정책에 무분별하게 난무된 로직들의 캡슐화하고,
                                역할과 책임을 기반으로 수 많은 레거시 코드를 유지관리
                            </li>
                            <li className="project_contant">쿠폰의 일괄 생성, 수정, 발급 등을 지원할 수 있도록 일괄 시스템을 개발
                            </li>
                            <li className="project_contant">쿠폰의 용도에 따라 MysqlDB, Redis, Couchbase, RabbitMQ 등의 오픈소스 활용
                            </li>
                        </ul>
                    </ps.TextLeft>

                    <ps.TextLeft>
                        <ps.ContentsTitle>레거시 프로그램을 TDD, BDD 기반으로 리팩토링</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">계속적으로 변동되는 정책에 무분별하게 난무된 로직들의 캡슐화하고,
                                역할과 책임을 기반으로 수 많은 레거시 코드를 유지관리
                            </li>
                            <li className="project_contant">Mockito를 활용하여 TDD, BDD 기반으로 대대적인 리펙토링 진행 및
                                60개가 넘는 쿠폰 정책에 대한 단일 책임 수준의 검증이 가능하도록 개발
                            </li>
                        </ul>
                    </ps.TextLeft>
                </div>
            </section>
            <Sperator></Sperator>
        </div>
    )
}

export default CouponAdmin