import theme from "../styles/Theme";
import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"
import { StyleDivision } from '../styles/StyleCommon'

import LookBackCatalog1 from "../images/project/look_back_catalog1.jpeg"
import LookBackCatalog2 from "../images/project/look_back_catalog2.jpeg"
import LookBackCatalog3 from "../images/project/look_back_catalog3.jpeg"
import LookBackCatalog4 from "../images/project/look_back_catalog4.jpeg"

const Contact = () => {
    return (
        <div>
            <StyleDivision>저를 돌아봤어요</StyleDivision>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>카탈로그 시스템과 함께 성장중</StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle></StyleContentsTitle>
                        <StyleContents>
                            전사 전체 거래의 6%이상 침투율로 모델 시스템을 통해 거래되고 있습니다.
                            어느날 전사 카테고리ID 개편으로 인해, 모델의 집합 key 정보인 카테고리 ID 변경에 의해 모델 시스템에 직격탄으로 영향을 받았고,
                            신/구 카테고리에 모두 대응되는 방어로직 배포 후, DB 및 ES에 각각 update, sync 작업을 진행하고 방어로직 제거 후 논스탑으로 정상 동작을 보장할 수 있었습니다.
                            
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={LookBackCatalog1} title="카탈로그1" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog2} title="카탈로그2" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog3} title="카탈로그3" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog4} title="카탈로그4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    );
}

export default Contact;

