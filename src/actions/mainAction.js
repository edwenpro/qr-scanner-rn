import * as actions from "./action-types";



export function addItem(item) {
    return {
        type: actions.ADD_ITEM,
        item: item
    }
}


export function removeItem(index) {
    return {
        type: actions.REMOVE_ITEM,
        index: index
    }
}
