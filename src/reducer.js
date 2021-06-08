import * as actions from './actionTypes'

let lastId = 0

export function reducer(state = [], action) {
    switch(action.type) {    
        case actions.ITEM_ADDDED :
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                }
            ]
        case actions.ITEM_REMOVED:
            return state.filter(item => item.id !== action.payload.id)
        case actions.ITEM_COMPLETE:
            return state.map(item => {
                return item.id !== action.payload.id ? item : {...item, resolved: true}
            })
    default :
        return []
    }
}