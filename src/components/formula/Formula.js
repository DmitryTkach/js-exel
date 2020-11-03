import {ExelComponent} from "@core/ExelComponent";

export class Formula extends ExelComponent{
    constructor($root) {
        super($root, {
            name: 'formula',
            listeners: ['input', 'click']
        })
        this.root = $root
    }
    toHtml() {
        return `
            <!-- Formula -->
            <div class="formula-label">Fx</div>
            <div class="formula-input" contenteditable="true"></div>
        `
    }

    onInput(event){
        console.log('Formula input', event.target.textContent.trim())
    }
    onClick(){
        console.log('Formula input click')
    }


}
