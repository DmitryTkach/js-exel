export class Activerout{
    static get path(){
        return window.location.hash.slice(1)
    }
    static get params(){
        return Activerout.path.split('/')[1]
    }

    static navigate(hash){
        if(typeof hash !== 'string' || !hash) throw new Error("Window location hash must be a string")
        window.location.hash = hash
    }
}