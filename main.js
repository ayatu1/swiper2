//刚开始第一张图片定位在left0
//3s后第二张图片定位在left0同时第一张图片定位在left-100%   第二张图片从left100%移过来
var n = 1
init()
setInterval(function () {
    makeLeave(getNode(n))
    makeCurrent(getNode(n+1))
    getNode(n).one('transitionend', function () {
        makeEnter($(this))
    })
    n ++ 
}, 3000)

function adjustNum(n) {
    return n%3 === 0 ? 3 : n%3
}

function getNode(n) {
    return $(`img:nth-child(${adjustNum(n)})`)
}

function init() {
    $(`img:nth-child(${n})`).addClass('current')
        .siblings('img').addClass('enter')
}

function makeLeave($node) {
    $node.removeClass('current').addClass('leave')
}
function makeEnter($node) {
    $node.removeClass('leave').addClass('enter')
}
function makeCurrent($node) {
    $node.removeClass('enter').addClass('current')
}
