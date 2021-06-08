import * as actions from './actionTypes'

export const itemAdded = description => {
    return {
        type: actions.ITEM_ADDDED,
        payload: {
            description: description
        }
    }
}

export const itemRemoved = id => {
    return {
        type: actions.ITEM_REMOVED,
        payload: {
            id: id
        }
    }
}

export const itemComplete = id => {
    return {
        type: actions.ITEM_COMPLETE,
        payload: {
            id: id
        }
    }
}