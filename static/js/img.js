isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    for (var v = 0; v < Agents.length; v++) 
        if (userAgentInfo.indexOf(Agents[v]) > 0) 
            return false;
        
    
    return true;
}

detectZoom = () => {
    var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();
    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    } else if (~ ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }
    if (ratio) {
        ratio = Math.round(ratio * 100);
    }
    return ratio;
}

if (isPC()) {
    $('[data-fancybox="gallery"]').each( (id, el) => {
        el.style.zoom = (el.style.zoom ? parseFloat(el.style.zoom) : 100) / detectZoom();
    });
}

Fancybox.bind('[data-fancybox="gallery"]', {
    contentClick: "iterateZoom",
    Images: {
        Panzoom: {
            maxScale: 2.5,
            minScale: isPC() ? 100 / detectZoom() : 1
        },
        zoom: false
    },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["close"]
        }
    }
});
