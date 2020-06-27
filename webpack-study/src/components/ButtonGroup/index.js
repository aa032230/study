import tpl from './index.tpl'
import './index.scss'

export default class ButtonGroupComponent {
    constructor() {
        this.name = 'ButtonGroupComponent'
    }

    tpl() {
        const oDiv = document.createElement('div')
        oDiv.className = 'btn-group '
        oDiv.innerHTML = tpl()
        return oDiv
    }
}
