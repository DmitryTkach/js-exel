export function createStore(rootReducer, initState = {}){
    let state = rootReducer(initState, {type: '__INIT__'})
    let listeners = []

    return {
        subscribe(fn){
            listeners.push(fn)
            return {
                unsubscribe(){
                    listeners = listeners.filter((listener)=>{
                        return listener !== listener
                    })
                }
            }
        },
        dispatch(action){
            state = rootReducer(state, action)
            listeners.forEach((listener)=>{
                listener(state)
            })
        },
        getState(){
            return state
        }
    }
}