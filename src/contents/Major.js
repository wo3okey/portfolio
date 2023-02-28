import theme from "../styles/Theme";
import { StyleMajor, StyleMajorDate, StyleMajorCompany, StyleMajorExplain } from "../styles/StyleMajor"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Major = () => {
  return (
    <div>
        <StyleDivision>열심히 달리고 있어요</StyleDivision>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2021.08~ing</StyleMajorDate>
            <StyleMajorCompany theme={theme}>번개장터</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>카탈로그, 검수대행 시스템 등의 버티컬 서비스 개발</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2020.03~2021.07</StyleMajorDate>
            <StyleMajorCompany theme={theme}>IBKsystem</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>한국주택금융공사(HF) 차세대 시스템 주신보 개인보증 시스템 개발</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2018.01~2020.02</StyleMajorDate>
            <StyleMajorCompany theme={theme}>TMON</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>쿠폰, 즉시할인, 프로모션 등 마케팅 관련 시스템 개발</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2017.06~2017.08</StyleMajorDate>
            <StyleMajorCompany theme={theme}>TMON</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>인턴 과제수행 및 정규직 전환</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2012.03~2018.02</StyleMajorDate>
            <StyleMajorCompany theme={theme}>금오공과대학교</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>컴퓨터소프트웨어공학과 졸업</StyleMajorExplain>
          </StyleMajor>
      <StyleSperator></StyleSperator>
    </div>
  );
}

export default Major;
