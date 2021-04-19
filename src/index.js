import './scss/style.scss'
import {Exel} from "@src/components/exel/Exel"
import {Header} from "@src/components/header/Header"
import {Formula} from "@src/components/formula/Formula"
import {Toolbar} from "@src/components/toolbar/Toolbar"
import {Table} from "@src/components/table/Table"
import {createStore} from "@core/createStore"
import {rootReducer} from "@src/redux/rootReducer";
import {storage} from "@core/utils";
import {initState} from "@src/redux/initState";

const defaultState = initState()
// Redux store
const store = createStore(rootReducer, defaultState)

store.subscribe((state)=>{
    storage('excel-state', state)
    console.log(state, 'state index')
})
const excel = new Exel('#app', {
    components:[{component: Header, className:'exel-header'},
        {component: Toolbar, className:'exel-toolbar'},
        {component: Formula, className:'exel-formula'},
        {component: Table, className:'exel-table'}],
    store
    }

)


excel.render()

