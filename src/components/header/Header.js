import {ExelComponent} from "@core/ExelComponent";
import {$} from "@core/Dom";
import * as actions from "@src/redux/actions";

export class Header extends ExelComponent{
    constructor($root, options) {
        super($root, {
             name: 'header',
            ...options,
            listeners: ['input']
        })
    }

    onInput(event){
        const data = { tableName:event.target.value }
        this.dispatch(actions.tableNameAction(data))
    }
    toHtml() {
        const state = this.store.getState()
        return `
        <!-- Header -->
        <div class="title">
            <span class="material-icons icon">description</span>
            <input type="text" class="input" value="${state.tableName}" placeholder="${state.tableName}">
        </div>
        <div class="controls">
            <button class="btn">
                <span class="material-icons icon">delete</span>
            </button>
            <button class="btn">
                <span class="material-icons icon">exit_to_app</span>
            </button>
        </div>
        `
    }
}