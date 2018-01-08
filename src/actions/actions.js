export function fetchItems(items) {
    return {
        type: "FETCH_ITEMS",
        payload: items
    }
}

export function addItem(item) {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

export function updateItem(item) {
    return {
        type: "UPDATE_ITEM",
        payload: item
    }
}

export function removeItem(item) {
    return {
        type: "REMOVE_ITEM",
        payload: item
    }
}