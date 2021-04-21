import {Listener} from "@core/Listener";

export class ExelComponent extends Listener{
    constructor($root, options = {}) {
        super($root, options.listeners,  options.name)
        this.emitter = options.emitter
        this.store = options.store
        this.prepare()
        this.describers = []
        this.storeSub = null
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

    //Dispatch redux actions
    dispatch(action){
        this.store.dispatch(action)
    }

    //Subscribe redux actions
    stateSubscribe(fn){
        this.storeSub = this.store.subscribe(fn)
    }

    toHtml(){
        return ''
    }

    destroy(){
        this.removeDomListeners()
        this.describers.forEach((describe) => {
            describe()
        })
        if(this.storeSub) this.storeSub.unsubscribe()
    }

}


