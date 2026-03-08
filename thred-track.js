(function() {
  function loadThredScript() {
    console.log('Loading Thred script...');
    console.log('Document ready state:', document.readyState);
    console.log('Body exists:', !!document.body);
    
    var script = document.createElement('script');
    // Load the script WITHOUT browserKey in URL - we'll initialize manually
    script.src = 'https://cdn.thred.dev/thred-track.js';
    script.type = 'text/javascript';
    
    script.onload = function() {
      console.log('Thred tracking script loaded successfully');
      
      // Manually initialize the SDK
      if (window.ThredSDK) {
        try {
          console.log('Initializing ThredSDK manually...');
          var sdk = new window.ThredSDK({ 
            browserKey: '0ec3ca8a-1507-4848-958e-477b175fcc69',
            debug: true 
          });
          window.Thred = sdk;
          console.log('ThredSDK initialized:', sdk);
        } catch (error) {
          console.error('Failed to initialize ThredSDK:', error);
        }
      } else {
        console.error('ThredSDK class not found on window object');
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
