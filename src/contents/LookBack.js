import theme from "../styles/Theme";
import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"
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
                            <StyleProjectTitle>카탈로그, 번개케어와 함께 성장중</StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle></StyleContentsTitle>
                        <StyleLookBack>
                            신규 런칭한 카탈로그 시스템이 전사 전체 거래의 6% 이상 침투율을 기록했습니다. 
                            또한 카탈로그 모델의 집합소인 케어관을 통한 번개케어 유료 거래 전환율도 대폭 증가하여, 월 거래액 40억 이상 돌파 및 GMV 40% 이상의 성장에 기여했습니다.
                            애착을 갖고 개발한 신규 시스템으로부터 유의미한 거래액과 매출이 나올 수 있도록, 안정적인 시스템을 지원할 수 있었습니다. 
                            번개장터 본앱, CMS, 케어관 등 다양한 지면과 탐색 경험을 통해 카탈로그, 번개케어 시스템이 규모있는 서비스로 발전 중이며, 발맞춰 함께 성장중입니다!
                        </StyleLookBack>                            
                        <StyleImages>
                            <StyleImage theme={theme} src={LookBackCatalog1} title="카탈로그1" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog2} title="카탈로그2" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog3} title="카탈로그3" alt="" />
                            <StyleImage theme={theme} src={LookBackCatalog4} title="카탈로그4" alt="" />
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>

            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>은행에서의 새로운 경험</StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle></StyleContentsTitle>
                        <StyleLookBack>
                            금융 도메인에 대한 관심으로, 커머스 서비스에서 금융 개발자로의 커리어 전환을 결심하게 되었습니다. 1년 3개월 동안 560억 규모의 개발자 인생 최대 프로젝트를 성공적으로 런칭한 경험을 쌓을 수 있었습니다.
                            개인보증 업무는 빌라왕 사건으로 더욱 알려진 "전세보증보험"에 대한 개발을 담당했습니다. 이로 인해 코드 한 줄이 누군가에게 막대한 손해를 입힐 수도 있다는 사실에 대해 깊이 생각하게 되었고, 한 줄에 대한 책임감을 강하게 느낄 수 있게 되었습니다.
                            은행 시스템을 개발하면서 기술적으로 성장하기에 조금 어려운 순간들도 많았지만, 개발자로서 성장하기 위해서는 단순히 기술력만 향상하는 것이 아니라 서비스 도메인에 대한 집중적인 이해가 필수라는 것을 크게 깨달을 수 있었습니다.
                        </StyleLookBack>                            
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    );
}

export default Contact;

