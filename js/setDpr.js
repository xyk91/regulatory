var dpr, rem, scale, winWidth;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');
winWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
caculate();

function caculate() {
    dpr = window.devicePixelRatio || 1;
    rem = winWidth * dpr / 7.5;
    scale = 1 / dpr;
    // 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('style', 'font-size:' + rem + 'px!important;');

}

// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
};

window.onresize = function() {
    winWidth = docEl.clientWidth / dpr;
    winWidth = winWidth > 750 ? 750 : winWidth;
    caculate();
}
