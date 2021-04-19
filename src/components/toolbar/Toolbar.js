import {ExelComponent} from "@core/ExelComponent";
import {generateToolbar} from "@src/components/toolbar/toolbarTemplate";
export class Toolbar extends ExelComponent{
    constructor($root, options) {
        super($root, {
            name: 'toolbar',
            listeners: ['click'],
            ...options
        })
    }


    onClick(event){
        if(event.target.dataset.type === "button") console.log(event.target.dataset.action)
    }


    toHtml() {
        return generateToolbar()
    }
}