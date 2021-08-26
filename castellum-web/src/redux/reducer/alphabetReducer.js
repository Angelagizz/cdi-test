const initialState = {
    sort: [""],
}

const alphabetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SORT_ADD':
            return {
                ...state,
                sort: [action.payload]
            }
        default:
            return state;
    }
}

export default alphabetReducer;