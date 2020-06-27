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
        this.data = this.defineData()
        this.selectedIndex = 0
    }
    // 初始化
    init() {
        this.render()
        this.bindEvent()
    }

    // 拦截赋值
    defineData() {
        // let _obj = {},
        //     method = 'plus',
        //     fValue = 0,
        //     sValue = 0
        // const _self = this
        // Object.defineProperties(_obj, {
        //     method: {
        //         get() {
        //             return method
        //         },
        //         set(newVal) {
        //             method = newVal
        //             _self.setResult(_self.data.method, _self.data.fValue, _self.data.sValue)
        //         },
        //     },
        //     fValue: {
        //         get() {
        //             return fValue
        //         },
        //         set(newVal) {
        //             fValue = newVal
        //             _self.setResult(_self.data.method, _self.data.fValue, _self.data.sValue)
        //         },
        //     },
        //     sValue: {
        //         get() {
        //             return sValue
        //         },
        //         set(newVal) {
        //             sValue = newVal
        //             _self.setResult(_self.data.method, _self.data.fValue, _self.data.sValue)
        //         },
        //     },
        // })
        // return _obj

        // proxy
        let target = {
            method: 'plus',
            fValue: 0,
            sValue: 0,
        }
        const _self = this
        return new Proxy(target, {
            get(target, prop) {
                return target[prop]
            },
            set(target, prop, value) {
                target[prop] = value
                _self.setResult(_self.data.method, _self.data.fValue, _self.data.sValue)
                return true
            },
        })
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
        this.oBtns = this.oBtnGroup.getElementsByClassName('btn')
        this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false)
        this.oInputs[0].addEventListener('input', this.onInput.bind(this), false)
        this.oInputs[1].addEventListener('input', this.onInput.bind(this), false)
    }

    // 事件处理
    onBtnClick(ev) {
        const tar = getTarget(ev),
            tagName = tar.tagName.toLowerCase()
        if (tagName === 'button') {
            const method = tar.getAttribute('data-method')
            this.setData('method', method)
            this.setBtnSelected(tar)
        }
    }

    // 双向绑定
    onInput(ev) {
        const tar = getTarget(ev),
            id = tar.getAttribute('data-id')
        this.setData(id, digitalize(trimSpace(tar.value)))
    }

    // 赋值
    setData(field, newVal) {
        this.data[field] = newVal
    }

    // 设置选中
    setBtnSelected(target) {
        this.oBtns[this.selectedIndex].className = 'btn'
        this.selectedIndex = [].indexOf.call(this.oBtns, target)
        this.oBtns[this.selectedIndex].className += ' selected'
    }
    // 展示
    setResult(method, fVal, sVal) {
        this.oResult.innerText = this[method](fVal, sVal)
    }
}
