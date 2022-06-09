import { LitElement, html } from "/lit.bundle.js"
import { QRCode } from "/qrcode.js"

class XXqrcode extends LitElement {
    static get properties() {
        return {
            value: { type: String },
            size: { type: Number },
            background: { type: String },
            foreground: { type: String },
            level: { type: String },
            padding: { type: Number },
        }
    }
    constructor() {
        super()
        this.value = ""
        this.size = 128
        this.background = "#ffffff"
        this.foreground = "#000000"
        this.level = "L"
        this.padding = 0
    }
    firstUpdated() {

        this.qrcode = new QRCode(this.shadowRoot.querySelector(".qrcode"), {
            text: this.value,
            width: this.size,
            height: this.size,
            colorDark: this.foreground,
            colorLight: this.background,
            correctLevel: QRCode.CorrectLevel.H
        })

    }
    render() {
        return html`
            <div class="qrcode" style="width:125px;height:125px;"></div>
                `
    }
}

customElements.define("xx-qrcode", XXqrcode)