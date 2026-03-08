(function() {
  function loadThredScript() {
    console.log('Loading Thred script...');
    console.log('Document ready state:', document.readyState);
    console.log('Body exists:', !!document.body);
    
    var script = document.createElement('script');
    script.src = 'https://cdn.thred.dev/thred-track.js?browserKey=0ec3ca8a-1507-4848-958e-477b175fcc69&debug=true';
    script.type = 'text/javascript';
    
    script.onload = function() {
      console.log('Thred tracking script loaded successfully');
      console.log('Window.Thred:', window.Thred);
      console.log('Window.thred:', window.thred);
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
