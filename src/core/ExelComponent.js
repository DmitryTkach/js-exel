import {Listener} from "@core/Listener";

export class ExelComponent extends Listener{
    constructor($root, options = {}) {
        super($root, options.listeners,  options.name)
    }

    toHtml(){
        return ''
    }


    // From listeners
    init(){
        this.initDomListeners()
    }

    destroy(){
        this.removeDomListeners()
    }

}


