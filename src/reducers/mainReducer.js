import * as actions from "../actions/action-types";

export default function mainReducer(state, action = {}) {
    let list = state.get("list");
    switch (action.type) {
        case actions.ADD_ITEM:
            list.push({ ...action.item, key: list.length })
            return state.withMutations(state => {
                state
                    .set('list', list)
            })
        case actions.REMOVE_ITEM:
            list.splice(action.index, 1)
            console.log(list, action.index);
            return state.withMutations(state => {
                state
                    .set('list', list)
            })
        default:
            return state
    }
}