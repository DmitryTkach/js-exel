import {ExelComponent} from "@core/ExelComponent";
import {createTable} from "@src/components/table/table.template";

export class Table extends ExelComponent{
    constructor($root) {
        super($root, {
            name: 'table',
            //listeners: ['input']
        })
    }


    toHtml() {
        return createTable()
    }
}