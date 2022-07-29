import { StyleSperator } from '../styles/StyleCommon'

const Major = () => {
  return (
    <div>
      <section>
        <h2><b>열심히 달리고 있어요</b></h2>
        <blockquote className="career">
          <table className="career">
          <tr>
              <td><b>2012.03~2018.02</b></td>
              <td>금오공과대학교</td>
              <td>컴퓨터소프트웨어공학과 졸업</td>
            </tr>
            <tr>
              <td><b>2017.06~2017.08</b></td>
              <td>TMON</td>
              <td>인턴 과제수행 및 정규직 전환</td>
            </tr>
            <tr>
              <td><b>2018.01~2020.02</b></td>
              <td>TMON</td>
              <td>쿠폰, 즉시할인, 프로모션 등 마케팅 관련 시스템 개발</td>
            </tr>
            <tr>
              <td><b>2020.03~2021.07</b></td>
              <td>IBKsystem</td>
              <td>한국주택금융공사(HF) 차세대 시스템 주신보 개인보증 시스템 개발</td>
            </tr>
            <tr>
              <td><b>2021.08~</b></td>
              <td>번개장터</td>
              <td>카탈로그, 검수대행 시스템 등의 버티컬 서비스 개발</td>
            </tr>
          </table>
        </blockquote>
        <blockquote className="career">
          <table className="career">
            <tr>
              <td><b>2021.06.02</b></td>
              <td>한국산업인력공단</td>
              <td>정보처리기사</td>
            </tr>
          </table>
        </blockquote>
      </section>
      <StyleSperator></StyleSperator>
    </div>
  );
}

export default Major;
