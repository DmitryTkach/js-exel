import {ExelComponent} from "@core/ExelComponent";
import {createTable} from "@src/components/table/table.template";
import {tableResize} from "@src/components/table/table.resize";


export class Table extends ExelComponent{
    constructor($root) {
        super($root, {
            name: 'table',
            listeners: ['mousedown']
        })

        this.$root = $root

       

    }

    /********** Resize column ***********/
    onMousedown(event){
        tableResize(event, this.$root)
    }

    toHtml() {
        return createTable(20)
    }
}