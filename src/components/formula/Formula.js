import {ExelComponent} from "@core/ExelComponent";
import {$} from "@core/Dom"
import * as actions from "@src/redux/actions";

export class Formula extends ExelComponent{
    constructor($root, options) {
        super($root, {
            name: 'formula',
            listeners: ['input', 'keydown'],
            ...options
        })
        this.root = $root

    }
    toHtml() {
        return `
            <!-- Formula -->
            <div class="formula-label">Fx</div>
            <div class="formula-input" data-formula contenteditable="true"></div>
        `
    }
    init() {
        super.init()
        const formulaInput = this.root.find('[data-formula]')

        this.subscribe('tableSelectCell', ($cell)=>{
            formulaInput.text($cell.text())
        })


        this.subscribe('cellInput', ($cell) => {
            formulaInput.text($cell.text())
            console.log('formula update')
        })

    }

    onInput(event) {
        this.emit('formulaInput', $(event.target).text())
    }

    onKeydown(event){
        if(event.key === 'Enter') this.emit('formulaEnter')
        if(event.key === 'Tab') this.emit('Tab')
    }


}
