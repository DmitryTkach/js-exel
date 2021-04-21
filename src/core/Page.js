import {$} from "@core/Dom"
import {Activerout} from "@core/router/Activerout";

export class Page{
    constructor(params = Activerout.params){
        this.params = params
    }

    getRooot(){
        throw new Error("Method getRoot should be impemented")
    }

    afterrender(){

    }

    static clear(){
        const $app = $('#app')
        $app.html('')
    }
}