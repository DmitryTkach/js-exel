import {storage} from "@core/utils";
export function initState() {
    return storage('excel-state') || {
        cellState: {},
        rowState:{},
        dataState:{},
        currentText:'',
        tableName:''
    }
}


