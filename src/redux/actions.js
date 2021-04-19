import {TABLE_RESIZE, TABLE_TEXT, TABLE_NAME} from "@src/redux/types";

export function resizeAction(data) {
    return {type: TABLE_RESIZE, data: data}
}

export function textAction(data) {
    return {type: TABLE_TEXT, data: data}
}

export function tableNameAction(data) {
    return {type: TABLE_NAME, data: data}
}