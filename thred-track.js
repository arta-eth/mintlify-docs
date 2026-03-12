(function() {
  function loadThredScript() {
    console.log('Loading Thred script...');
    console.log('Document ready state:', document.readyState);
    console.log('Body exists:', !!document.body);


    const browserKey = '0ec3ca8a-1507-4848-958e-477b175fcc69';

    var script = document.createElement('script');
    script.src = `https://cdn.thred.dev/thred-track.js?browserKey=${browserKey}&debug=true`;
    script.type = 'text/javascript';
    
    script.onload = function() {
      console.log('Thred tracking script loaded successfully');
      console.log('Window.Thred:', window.Thred);
      
      // Initialize ThredSDK
      if (window.Thred && window.Thred.ThredSDK) {
        try {
          var thredInstance = new window.Thred.ThredSDK({
            browserKey: browserKey,
            debug: true
          });
          console.log('Thred SDK initialized:', thredInstance);
        } catch (error) {
          console.error('Failed to initialize Thred SDK:', error);
        }
      } else if (window.Thred && window.Thred.default) {
        try {
          var thredInstance = new window.Thred.default({
            browserKey: browserKey,
            debug: true
          });
          console.log('Thred SDK initialized via default export:', thredInstance);
        } catch (error) {
          console.error('Failed to initialize Thred SDK via default:', error);
        }
      }
    };
    
    script.onerror = function(error) {
      console.error('Failed to load Thred tracking script', error);
    };
    
    document.body.appendChild(script);
    console.log('Script tag appended to body');
  }

  if (document.readyState === 'loading') {
    console.log('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', loadThredScript);
  } else {
    loadThredScript();
  }
})();
