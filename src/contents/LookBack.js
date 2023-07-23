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
                            번개장터 본앱, CMS, 케어관 등 다양한 지면과 탐색 경험을 통해 카탈로그, 번개케어 시스템이 규모 있는 서비스로 발전 중이며, 이에 발맞춰 함께 성장 중입니다!
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
                            <StyleProjectTitle>은행 프로젝트의 값진 경험</StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle></StyleContentsTitle>
                        <StyleLookBack>
                        금융 도메인에 대한 관심으로, 커머스에서 금융 개발자로 커리어 도메인을 전환하였습니다. 
                        1년 3개월 동안 560억 규모의 프로젝트를 성공적으로 런칭하는 경험을 했습니다. 
                        짧지도 길지도 않은 개발자 인생에서 가장 큰 프로젝트를 경험한 것이었습니다. 
                        개인보증 업무는 빌라왕 사건으로 더욱 알려진 "전세보증보험"에 대한 개발을 담당했습니다. 
                        이로 인해 코드 한 줄 한 줄, 특히 스스로 작성한 코드에 대한 책임감이 더욱 강해졌습니다. 
                        금융 시스템 개발은 기술적 성장이 쉽지 않겠다는 생각도 있었지만, 금융 도메인 개발을 통해 단순 기술력만 향상하는 것이 아니라 서비스 도메인에 대한 집중적인 이해를 뒷받침해야 이유 있는 코드 작성이 가능함을 깨달았습니다.
                        </StyleLookBack>                            
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>

            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>개발자의 숙명, 어드민</StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle></StyleContentsTitle>
                        <StyleLookBack>
                            개발자 첫 커리어의 1년은 어드민 시스템 개발만 담당했습니다.
                            개발 리스크가 가장 적은 업무라는 이유로 배정받았지만, 수많은 어드민 기능을 만들어 보니 어드민만큼 책임이 따르는 업무도 없다는 걸 깨달았습니다.
                            어드민 업무 경험을 통해 응답시간을 2000배 이상 개선하는 운영 효율 개선, 일괄 처리 시스템, UI 개선 등의 다양한 작업을 수행하며, 운영자의 휴먼 에러를 최소화하고 운영 공수를 줄이는 큰 성과를 이뤄낼 수 있었습니다.
                            특히 백엔드 개발자에게 어드민은 내가 설계한 시스템의 시각화 공간이라 생각하며, 적극적으로 개발과 개선에 임하고 있습니다.
                        </StyleLookBack>                            
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    );
}

export default Contact;

