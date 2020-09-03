export const addToCart = (suit) => {
    return {
        type: 'ADD_TO_CART',
        payload: suit
    };
};

export const deleteSingleItem= (id) => {
    return {
        type: 'DELETE_SINGLE_ITEM',
        payload: id
    }
}

export const deleteAllItems = () => {
    return {
        type: 'DELETE_ALL_ITEMS'
    }
}