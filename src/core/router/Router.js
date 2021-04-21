import {$} from "@core/Dom";
import {Activerout} from "@core/router/Activerout";
import {Page} from "@core/Page";
export class Router{
    constructor(selector, routes){
        if(!selector) throw new Error("selector is not provided but required for router")
        this.$placeholder = $(selector)
        this.routes = routes
        this.changeHashHandler = this.changeHashHandler.bind(this)
        this.prevPage = null
        this.init()
    }
    init(){
        window.addEventListener('hashchange', this.changeHashHandler)
        this.changeHashHandler()
    }

     changeHashHandler(){
         Page.clear()
         let path = Activerout.path
         if(this.prevPage) this.prevPage.destroy()
         if(Activerout.path.includes('exel')) path = 'exel'
         switch (path) {
             case 'dashboard': this.Page = this.routes.dashboad
                 break;
             case 'exel': this.Page = this.routes.exel
                 break;
             default: this.Page = this.routes.dashboad

         }
         const page = new this.Page()
         this.prevPage = page
         this.$placeholder.html(page.getRooot())
     }

     destroy(){
         window.removeEventListener('hashchange', this.changeHashHandler)
     }


 }