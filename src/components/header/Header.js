import {ExelComponent} from "@core/ExelComponent";
import * as actions from "@src/redux/actions";
import {Activerout} from "@core/router/Activerout";

export class Header extends ExelComponent{
    constructor($root, options) {
        super($root, {
             name: 'header',
            ...options,
            listeners: ['input', 'click']
        })
    }

    onInput(event){
        const data = { tableName:event.target.value }
        this.dispatch(actions.tableNameAction(data))
    }

    onClick(event){
        const tableKey = Activerout.params
        if(event.target.dataset.type === 'deleteTable' ) {
            const remove = confirm("Are you sure you want to delete this table ?")
            if(remove){
                localStorage.removeItem('excel:'+tableKey)
                Activerout.navigate('dashboard')
            }
        }

    }



    toHtml() {
        const state = this.store.getState()
        return `
        <!-- Header -->
        <div class="title">
            <span class="material-icons icon">description</span>
            <input type="text" class="input" value="${state.tableName || 'New table'}" placeholder="New table">
        </div>
        <div class="controls">
            <button class="btn">
                <span class="material-icons icon" data-type="deleteTable">delete</span>
            </button>
            <a href="/#dashboard" class="btn">
                <span class="material-icons icon">exit_to_app</span>
            </a>
        </div>
        `
    }

}