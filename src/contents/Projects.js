import { Title } from "../styles/StyleProjects"
import CouponAdmin from "../projects/CouponAdmin"
import BehindCoupon from "../projects/BehindCoupon"
import RoulettePromotion from "../projects/RoulettePromotion"
import HfRenewal from "../projects/HfRenewal"
import PomPom from "../projects/PomPom"

const Projects = () => {
    return (
        <div>
            <Title>경력 프로젝트</Title>
            <CouponAdmin></CouponAdmin>
            <BehindCoupon></BehindCoupon>
            <RoulettePromotion></RoulettePromotion>
            <HfRenewal></HfRenewal>

            <Title>개인 프로젝트</Title>
            <PomPom></PomPom>
        </div>
    )
}

export default Projects