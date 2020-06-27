// 去除空格
function trimSpace(str) {
    return str.replace(/\s+/g, '')
}

// 数字化
function digitalize(str) {
    return Number(str) || 0
}

// 兼容事件对象
function getTarget(ev) {
    var e = ev || window.event
    return e.target || e.srcElement
}
export { trimSpace, digitalize, getTarget }
