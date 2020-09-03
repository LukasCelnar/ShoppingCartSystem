// import _ from 'lodash'

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [ ...state, action.payload ];
        case 'DELETE_ALL_ITEMS':
            return []
        case 'DELETE_SINGLE_ITEM':
            //return _.reject(state, { id: action.payload });
            return state.filter((item, i) => {
                return action.payload !== i
            })
        default:
            return state;
    }
}