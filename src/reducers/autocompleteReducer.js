const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_LIST':
            return state;
        case 'UPDATE_LIST':
            return action.list;
        case 'FAILED_LIST':
            return state;
        default:
            return state;
    }
};
