import * as ps from "../styles/StyleProjects"
import PomPom1 from "../images/project/pompom1.png"
import PomPom2 from "../images/project/pompom2.png"
import PomPom3 from "../images/project/pompom3.png"
import PomPom4 from "../images/project/pompom4.png"
import Project3 from "../images/project/project3.JPG"

const PomPom = () => {
    return (
        <div>
            <section className="major">
                <header className="major">
                    <h3>POMPOM 소셜 서비스</h3>
                    <p>
                        <ps.SubTitle>관심사를 기반으로 서로를 연결할 수 있도록 만든 소셜 서비스 POMPOM 입니다.</ps.SubTitle>
                        <ps.SubTitle>졸업한 교내 대학교를 대상으로 개발하여 약 600여명의 학생이 서비스에 참여했습니다.</ps.SubTitle>
                    </p>
                </header>

                <div className="projects">
                    <img src={Project3} className="image fit" alt=''/>
                    <ps.TextLeft>
                        <ps.ContentsTitle>빠르고 안전한 시스템 개발</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                페이스북 계정 연동과 교내 학번 연동을 통해 별도의 개인정보 확인이 없는 간편가입 학생인증 시스템 개발
                            </li>
                            <li className="project_contant">
                                NodeJs Express 모듈을 활용하여 비동기 이벤트 기반으로 빠르게 응답가능한 시스템 개발
                            </li>
                        </ul>
                    </ps.TextLeft>

                    <div className="pompom-img">
                        <img className="image fit" src={PomPom3} title="pompom3" alt="" />
                    </div>
                    <div className="pompom-img">
                        <img className="image fit" src={PomPom4} title="pompom4" alt="" />
                    </div>
                    <div className="pompom-img2">
                        <img className="image fit" src={PomPom1} title="pompom1" alt="" />
                    </div>
                    <div className="pompom-img2">
                        <img className="image fit" src={PomPom2} title="pompom2" alt="" />
                    </div>

                    <ps.TextLeft>
                        <ps.ContentsTitle>교내 학생 중심의 사용자 서비스 구조</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                웹크롤링으로 학식당, 기숙사식당 등의 식단정보 수집 및 버스도착 정보를 제공할 수 있는 유용한 서비스 개발
                            </li>
                            <li className="project_contant">
                                포스팅시 기재하는 해쉬태그 및 가입시 등록된 관심사 기반으로 친구추천 시스템 개발
                            </li>
                        </ul>
                    </ps.TextLeft>
                </div>
            </section>
        </div>
    )
}

export default PomPom