var ua = navigator.userAgent;
var isWeixin = !!/MicroMessenger/i.test(ua);
var isQQ = !!/QQ/i.test(ua);
if (isWeixin || isQQ) {
    window.location.href = 'https://c.pc.qq.com/middle.html?pfurl='+window.location.href;
}