let defaultState = {
    name:'test',
    price:1000
}
let reducer = function(state=defaultState,action){
    switch(action.type){
        case 'CHANG_PRICE':
            return {
                ...state,
                price:action.payload.price
            }

        default:
            return state;
    }
}

export default reducer;