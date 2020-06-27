/**
 * Es5模仿模块化
 *
 * 函数 -> 各行其职 -> 一个函数完成一个功能
 */
;(function (doc, initTools) {
    var oCalculator = doc.getElementsByClassName('J_calculator')[0],
        oResult = oCalculator.getElementsByClassName('result')[0],
        oInputs = oCalculator.getElementsByTagName('input'),
        oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0]

    // 初始化
    var init = function () {
        bindEvent()
    }

    // 事件绑定函数
    function bindEvent() {
        oBtnGroup.addEventListener('click', onBtnClick, false)
    }
    function onBtnClick(ev) {
        var tar = initTools.getTarget(ev),
            tagName = tar.tagName.toLowerCase()
        if (tagName === 'button') {
            var method = tar.getAttribute('data-method'),
                fVal = initTools.digitalize(oInputs[0].value),
                sVal = initTools.digitalize(oInputs[1].value)
            renderResult(initCompute[method](fVal, sVal))
        }
    }

    // 渲染结果
    function renderResult(result) {
        oResult.innerText = result
    }

    init()
})(document, initTools)
