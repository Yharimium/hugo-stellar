if (is_weixn_qq()) {
    window.location.href = 'https://c.pc.qq.com/middle.html?pfurl='+window.location.href;
}

function is_weixn_qq() {
    var ua = navigator.userAgent;
    var isWeixin = !!/MicroMessenger/i.test(ua);
    var isQQ = !!/QQ/i.test(ua);
    if (isWeixin || isQQ) {
        return true;
    }
    return false;
}