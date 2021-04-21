import {Page} from "@core/Page";
import {initState} from "@src/redux/initState";
import {createStore} from "@core/createStore";
import {rootReducer} from "@src/redux/rootReducer";
import {storage} from "@core/utils";
import {Header} from "@src/components/header/Header";
import {Toolbar} from "@src/components/toolbar/Toolbar";
import {Formula} from "@src/components/formula/Formula";
import {Table} from "@src/components/table/Table";
import {Exel} from "@src/components/exel/Exel";

export class ExelPage extends Page{
    getRooot(){
        const params = this.params

        let defaultState = initState()
        const state = localStorage.getItem(`excel:${params}`)
        if(state) {
            defaultState = JSON.parse(state)
        }
        // Redux store
        const store = createStore(rootReducer, defaultState)

        store.subscribe((state)=>{
            storage(`excel:${params}`, state)
            console.log(state, 'state index')
        })
        this.excel = new Exel('#app', {
            components:[{component: Header, className:'exel-header'},
                {component: Toolbar, className:'exel-toolbar'},
                {component: Formula, className:'exel-formula'},
                {component: Table, className:'exel-table'}],
            store
            }

        )


        this.excel.render()
    }


    destroy(){
        this.excel.destroy()
    }


}