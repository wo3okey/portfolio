function loadExternalJs() {
    const script1 = document.createElement('script');
    script1.src = './jquery.min.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = './jquery.scrolly.min.js';
    script2.async = true;

    const script3 = document.createElement('script');
    script3.src = './jquery.dropotron.min.js';
    script3.async = true;

    const script4 = document.createElement('script');
    script4.src = './jquery.scrollex.min.js';
    script4.async = true;

    const script5 = document.createElement('script');
    script5.src = './browser.min.js';
    script5.async = true;

    const script6 = document.createElement('script');
    script6.src = './breakpoints.min.js';
    script6.async = true;

    const script7 = document.createElement('script');
    script7.src = './util.js';
    script7.async = true;

    const script8 = document.createElement('script');
    script8.src = './main.js';
    script8.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5);
    document.body.appendChild(script6);
    document.body.appendChild(script7);
    document.body.appendChild(script8);
  }
  
  export default loadExternalJs;