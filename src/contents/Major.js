import { Sperator } from '../styles/StyleCommon'

const Major = () => {
  return (
    <div>
      <section>
        <h2><b>자격 및 경력사항</b></h2>
        <blockquote className="career">
          <table className="career">
            <tr>
              <td><b>2021.06.02</b></td>
              <td>한국산업인력공단</td>
              <td>정보처리기사</td>
            </tr>
          </table>
        </blockquote>
        <blockquote className="career">
          <table className="career">
            <tr>
              <td><b>2017.06~2017.08</b></td>
              <td>TMON</td>
              <td>인턴 및 정규직 전환</td>
            </tr>
            <tr>
              <td><b>2018.01~2020.02</b></td>
              <td>TMON</td>
              <td>Backend Server 마케팅 개발팀</td>
            </tr>
            <tr>
              <td><b>2020.03~</b></td>
              <td>IBKsystem</td>
              <td>한국주택금융공사(HF) 차세대 시스템 주신보 개인보증 개발팀</td>
            </tr>
          </table>
        </blockquote>
      </section>
      <Sperator></Sperator>
    </div>
  );
}

export default Major;
