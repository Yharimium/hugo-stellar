function showFastLoadBubble() {
    var style1 = 'background: #333; color: #fff; padding: 2px 8px; border-radius: 4px 0 0 4px; font-weight: bold; line-height: 1rem';
    var style2 = 'background: #333; color: #ff9800; padding: 2px 8px; border-radius: 0 4px 4px 0; font-weight: bold; line-height: 1rem';
    var style3 = 'font-style: italic; text-decoration: underline; color: #0000FF; margin-left: 1rem';
    console.log('%cFast Load%cv1.0.0 %cBy Yharim', style1, style2, style3);
}

showFastLoadBubble();

function loadFastestCSS(urls) {
    var loaded = false;

    urls.forEach(function(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;

        link.onload = function() {
            if (!loaded) {
                loaded = true;
                console.log('CSS loaded from:', url);
            } else {
                link.disabled = true;
            }
        };

        link.onerror = function() {
            console.log('Failed to load CSS from:', url);
        };

        document.head.appendChild(link);
    });
}

function loadFastestScript(urls) {
    var loaded = false;

    urls.forEach(function(url) {
        var script = document.createElement('script');
        script.src = url;

        script.onload = function() {
            if (!loaded) {
                loaded = true;
                console.log('Script loaded from:', url);
            } else {
                script.remove();
            }
        };

        script.onerror = function() {
            console.log('Failed to load script from:', url);
        };

        document.head.appendChild(script);
    });
}