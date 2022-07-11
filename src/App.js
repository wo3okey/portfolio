import { useEffect } from 'react';

import Intro from './contents/Intro'
import Contents from './contents/Contents'

const App = () => {
  useEffect(() => {
    document.body.classList.add('is-preload');
    document.body.classList.add('landing');

    const script = document.createElement('script');

    script.src = './assets/js/main.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }, []);

  return (
    <div id='page-wrapper'>
      <Intro></Intro>
      <Contents></Contents>
    </div>
  );
}

export default App;
