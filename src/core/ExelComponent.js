import {Listener} from "@core/Listener";

export class ExelComponent extends Listener{
    constructor($root, options = {}) {
        super($root, options.listeners,  options.name)
        this.emitter = options.emitter
        this.prepare()
        this.describers = []
    }

    prepare(){

    }

    // From listeners
    init(){
        this.initDomListeners()
    }

    //Emit
    emit(event, ...args){
        this.emitter.emit(event, ...args)
    }
    //Subscribe
    subscribe(event, fn){
        const describe = this.emitter.subscribe(event, fn)
        this.describers.push(describe)
    }




    toHtml(){
        return ''
    }

    destroy(){
        this.removeDomListeners()
        this.describers.forEach((describe) => {
            describe()
        })
    }

}


