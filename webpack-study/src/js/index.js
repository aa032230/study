import Calculator from '../modules/Calculator'
;(doc => {
    const oCalculator = doc.getElementsByClassName('J_calculator')[0]
    // 初始化函数
    const init = () => {
        new Calculator(oCalculator).init()
    }
    init()
})(document)
