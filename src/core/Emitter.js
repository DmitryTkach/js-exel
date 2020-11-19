export class Emitter {
    constructor() {
        this.listeners = {}
    }

    subscribe(event, fn){
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        // Describe
        return () => {
            this.listeners[event] = this.listeners[event].filter((listener) => {
                return listener  !== fn
            })
        }
    }

    emit(event, ...args){
        if(!Array.isArray(this.listeners[event])) return false
        this.listeners[event].forEach((listener) => {
            listener(...args)
        })
    }

}

