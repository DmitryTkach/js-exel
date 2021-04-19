import {TABLE_RESIZE, TABLE_TEXT, TABLE_NAME }from "@src/redux/types";

export function rootReducer(state, action){
    switch (action.type) {
        case TABLE_RESIZE:
            const field = action.data.type === 'column'? 'cellState' : 'rowState'
            const tableState = state[field] || {}
            tableState[action.data.id] = action.data.value
            return {...state, [field]: tableState} // id, value

        case TABLE_TEXT:
            const currentText = action.data.currentText
            const dataState = state.dataState || {}
            dataState[action.data.id] = action.data.value
            return {...state, dataState, currentText} // id, value
        case TABLE_NAME:
            const tableName = action.data.tableName
            return {...state, tableName}

        default: return state
    }

}