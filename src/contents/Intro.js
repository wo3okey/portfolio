import React from 'react';
import Typed from 'react-typed';

const Intro = () => {
  return (
    <div>
      <header id="header">
        <h1 id="logo">
          <a onClick={() => window.location.reload(false)} >Portfolio. Wookey</a>
        </h1>
      </header>

      <section id="banner">
        <div className="content">
          <header>
            <h2><code>Hello Wookey World;</code></h2>
              <Typed
              className = "typing"
              style={{marginRight:'15px', fontSize:'20px'}}
              strings={["Attractive and Fascinating Developer Wookey Portfolio🧑‍💻"]}
              typeSpeed={50}
              />
          </header>
        </div>
      </section>
    </div>
  );
}

export default Intro;