import theme from "../styles/Theme";

import { StyleCompany, StyleCompanyIcon } from "../styles/StyleProjects"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

import BungaeCare from "../projects/BungaeCare"
import VerticalAdmin from "../projects/VerticalAdmin"
import Catalog from "../projects/Catalog"
import Inspection from "../projects/Inspection"
import CouponAdmin from "../projects/CouponAdmin"
import BehindCoupon from "../projects/BehindCoupon"
import RoulettePromotion from "../projects/RoulettePromotion"
import HfRenewal from "../projects/HfRenewal"
import PomPom from "../projects/PomPom"

import Bunjang from "../images/company/bunjang.png"
import Ibksystem from "../images/company/ibksystem.png"
import Tmon from "../images/company/tmon.png"

const Projects = () => {
    return (
        <div>
            <StyleDivision>다양한 경험을 했어요</StyleDivision>

            <StyleCompany><StyleCompanyIcon theme={theme} src={Bunjang} title="번개장터" alt="" /> 번개장터 | 2021.08 - ing</StyleCompany>
            <BungaeCare></BungaeCare>
            <Inspection></Inspection>
            <Catalog></Catalog>
            <VerticalAdmin></VerticalAdmin>
            <StyleSperator></StyleSperator>

            <StyleCompany><StyleCompanyIcon theme={theme} src={Ibksystem} title="IBK시스템" alt="" /> IBK시스템 | 2020.03 - 2021.07</StyleCompany>
            <HfRenewal></HfRenewal>
            <StyleSperator></StyleSperator>

            <StyleCompany><StyleCompanyIcon theme={theme} src={Tmon} title="티몬" alt="" /> 티몬 | 2018.01 - 2020.02</StyleCompany>
            <RoulettePromotion></RoulettePromotion>
            <BehindCoupon></BehindCoupon>
            <CouponAdmin></CouponAdmin>

            <StyleSperator></StyleSperator>
            {/* <StyleDivision>틈틈히 만들어봤어요</StyleDivision> */}
            {/* <PomPom></PomPom> */}
        </div>
    )
}

export default Projects