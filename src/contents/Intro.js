import theme from "../styles/Theme";
import { StyleUpdateAt } from "../styles/StyleIntro"

const Intro = () => {
  const moment = require('moment')
  const now = moment()
  const updated = moment('20230301','YYYYMMDD')
  const diff = now.diff(updated, 'days');

  return (
    <div>
      <section id="banner">
        <div className="content">
          <header>
            <h2><code>Hello Wookey World;🧑‍💻</code></h2>
            <StyleUpdateAt theme={theme}>portfolio. last updated {moment(updated).format('YYYY.MM.DD')}(D+{diff})</StyleUpdateAt>
          </header>
        </div>
      </section>
    </div>
  );
}

export default Intro;