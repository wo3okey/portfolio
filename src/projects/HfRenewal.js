import * as ps from "../styles/StyleProjects"
import { Sperator } from '../styles/StyleCommon'
import Project5 from "../images/project/project5.png"

const HfRenewal = () => {
    return (
        <div>
            <section className="major">
                <header className="major">
                    <h3>한국주택금융공사(HF) 차세대 시스템 개발</h3>
                    <p>
                        <ps.SubTitle>580억 규모의 한국주택금융공사(HF) 차세대 시스템 개발에 참여했습니다.</ps.SubTitle>
                        <ps.SubTitle>주택신용보증팀에서 개인보증 개발 업무를 수행했습니다.</ps.SubTitle>
                    </p>
                </header>
                <div className="projects">
                    <img src={Project5} className="image fit" />
                    <ps.TextLeft>
                        <ps.ContentsTitle>공사(HF)와 주택보증 관련 업무 개발 수행</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                피보증인변경, 보증료수납관리, 전세반환보증 등 개인과 관련된 업무뿐만 아니라 공사와 사업자간의 보증업무 등 크고 작은 보증 시스템을 개발
                            </li>
                            <li className="project_contant">
                                MMS(Multi Manager System)와 MAC(Multi Channel Architecture)를 통한 대내 시스템 연계
                            </li>
                        </ul>

                        <ps.ContentsTitle>대외 금융시스템 연계 구성을 위한 전문 시스템 개발</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                공사(HF)로부터 은행(BANK), 주택도시기금(HUG), 중앙평가원(JAA), 한국감정원(KAB) 등 FEP 대외기관의 시스템 인터페이스 전문 송수신 시스템
                                개발
                            </li>
                            <li className="project_contant">
                                FEP(Front-End Processor) I/F(interface)를 통해 각 대외기관과의 시스템 전문 통신
                            </li>
                            <li className="project_contant">
                                템플릿 메소드 패턴을 적극적으로 활용하여 송수신 시스템을 추상화하고 각각의 전문 시스템을 구현화 함으로써 일관성 있고 유현한 구조로 개발
                            </li>
                        </ul>
                    </ps.TextLeft>
                </div>
            </section>
            <Sperator></Sperator>
        </div>
    )
}

export default HfRenewal