import compute from '../lib/Compute'
import { trimSpace, digitalize, getTarget } from '../utils/tools'
import ResultComponent from '../components/Result'
import InputGroupComponent from '../components/InputGroup'
import ButtonGroupComponent from '../components/ButtonGroup'

@compute
export default class Calculator {
    constructor(el) {
        this.name = 'Calculator'
        this.el = el
        this.resultComponent = new ResultComponent()
        this.inputGroupComponent = new InputGroupComponent()
        this.buttonGroupComponent = new ButtonGroupComponent()
    }
    // 初始化
    init() {
        this.render()
        this.bindEvent()
    }
    // 模板编译
    render() {
        // 创建文档碎片用于存放节点
        const oFrag = document.createDocumentFragment()
        oFrag.appendChild(this.resultComponent.tpl())
        oFrag.appendChild(this.inputGroupComponent.tpl())
        oFrag.appendChild(this.buttonGroupComponent.tpl())
        // 将dom节点挂载
        this.el.appendChild(oFrag)
    }
    bindEvent() {
        this.oResult = this.el.getElementsByClassName('result')[0]
        this.oBtnGroup = this.el.getElementsByClassName('btn-group')[0]
        this.oInputs = this.el.getElementsByClassName('num-input')
        this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false)
    }

    // 事件处理
    onBtnClick(ev) {
        const tar = getTarget(ev),
            tagName = tar.tagName.toLowerCase()
        if (tagName === 'button') {
            const method = tar.getAttribute('data-method'),
                fVal = digitalize(trimSpace(this.oInputs[0].value)),
                sVal = digitalize(trimSpace(this.oInputs[1].value))
            this.setResult(method, fVal, sVal)
        }
    }

    // 赋值
    setResult(method, fVal, sVal) {
        this.oResult.innerText = this[method](fVal, sVal)
    }
}
