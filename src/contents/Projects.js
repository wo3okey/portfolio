import { StyleCompany } from "../styles/StyleProjects"
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

const Projects = () => {
    return (
        <div>
            <StyleDivision>다양한 경험을 했어요</StyleDivision>

            <StyleCompany>번개장터 | 2021.08 - ing</StyleCompany>
            <BungaeCare></BungaeCare>
            <Inspection></Inspection>
            <Catalog></Catalog>
            <VerticalAdmin></VerticalAdmin>
            <StyleSperator></StyleSperator>

            <StyleCompany>IBK시스템 | 2020.03 - 2021.07</StyleCompany>
            <HfRenewal></HfRenewal>
            <StyleSperator></StyleSperator>

            <StyleCompany>티몬 | 2018.01 - 2020.02</StyleCompany>
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