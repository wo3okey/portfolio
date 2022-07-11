import * as ps from "../styles/StyleProjects"
import { Sperator } from '../styles/StyleCommon'
import Roulette1 from "../images/project/roulette1.jpg"
import Roulette2 from "../images/project/roulette2.jpg"
import Roulette3 from "../images/project/roulette3.jpg"
import Roulette4 from "../images/project/roulette4.jpg"
import Project4 from "../images/project/project4.JPG"

const RoulettePromotion = () => {
    return (
        <div>
            <section className="major">
                <header className="major">
                    <h3>룰렛 프로모션 시스템</h3>
                    <p>
                        <ps.SubTitle>룰렛 프로모션은 타임 커머스의 효율적인 운영을 위한 다양한 혜택을 제공했습니다.</ps.SubTitle>
                        <ps.SubTitle>안정적인 시스템으로 프로모션을 진행할 수 있도록 개발했습니다.</ps.SubTitle>
                    </p>
                </header>
                <div className="projects">
                    <div className="roulette-img">
                        <img className="image fit" src={Roulette1} title="티몬데이룰렛1" alt="" />
                    </div>
                    <div className="roulette-img">
                        <img className="image fit" src={Roulette2} title="티몬데이룰렛2" alt="" />
                    </div>
                    <div className="roulette-img">
                        <img className="image fit" src={Roulette3} title="티몬데이룰렛3" alt="" />
                    </div>
                    <div className="roulette-img">
                        <img className="image fit" src={Roulette4} title="티몬데이룰렛4" alt="" />
                    </div>

                    <img className="image fit" src={Project4} width="100%" />
                    <ps.TextLeft>
                        <ps.ContentsTitle>유연한 설정이 가능한 프로모션 설계구조</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                쿠폰/적립금/경품 등 상품의 스킴에 상관없이 다양하게 상품 설정이 가능한 구조로 설계
                            </li>
                            <li className="project_contant">
                                시스템 담당자가 프로모션 진행기간과 시간을 유연하게 설정할 수 있도록 스케줄링 시스템 개발
                            </li>
                        </ul>

                        <ps.ContentsTitle>일평균 20만 사용자의 참여</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                프로모션 정책 저장시 Redis에 상품별 최대당첨갯수와 현재갯수 정보를 저장하며 프로모션 참여시 중복지급여부 및 당첨확률 등의 유효성 검사를 진행
                            </li>
                            <li className="project_contant">
                                프로모션의 기본정책, 상품, 스케줄링 정보 등의 immutable 정보는 Memcached를 이용하여 캐싱
                            </li>
                        </ul>

                        <ps.ContentsTitle>사용자 어뷰징 방어 처리</ps.ContentsTitle>
                        <ul>
                            <li className="project_contant">
                                크로스 체크를 통해 화면(front)과 비즈니스(backend) 어뷰징 방어
                            </li>
                            <li className="project_contant">
                                공격적인 다중요청 방어를 위해 스케줄 정보와 사용자 정보를 DB Unique 설정으로 비정상적인 데이터 요청건 방어
                            </li>
                        </ul>
                    </ps.TextLeft>
                </div>
            </section>
            <Sperator></Sperator>
        </div>
    )
}

export default RoulettePromotion