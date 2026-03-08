(function() {
  function loadThredScript() {
    var script = document.createElement('script');
    script.src = 'https://cdn.thred.dev/thred-track.js?browserKey=0ec3ca8a-1507-4848-958e-477b175fcc69&debug=true';
    
    script.onload = function() {
      console.log('Thred tracking script loaded successfully');
    };
    
    script.onerror = function() {
      console.error('Failed to load Thred tracking script');
    };
    
    document.body.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadThredScript);
  } else {
    loadThredScript();
  }
})();
