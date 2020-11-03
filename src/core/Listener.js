import {capitalize} from "@core/utils";

export class Listener{
    constructor($root, listeners = [], componentName) {
        if (!$root){
            throw new Error('No root provided for Listener component')
        }
        this.root = $root
        this.listeners = listeners
        this.name = componentName
    }

    initDomListeners(){
        this.listeners.forEach((listener) => {
            const method = getEventName(listener)
            if(!this[method]){
                throw new Error(`you have add listener ${method} but no method "${method}" in "${this.name}" component`)
            }
            this[method] = this[method].bind(this)
            this.root.on(listener, this[method])
        })
    }

    removeDomListeners(){
        this.listeners.forEach((listener) => {
            const method = getEventName(listener)
            this.root.off(listener, this[method])
        })
    }

}


function getEventName(listener){
    return 'on'+capitalize(listener)
}