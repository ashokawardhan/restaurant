const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_LIST':
            if (state.length === 0) {
                return [`Search for ${action.current}`];
            }
            return state;
        case 'UPDATE_LIST':
            return action.list;
        case 'FAILED_LIST':
            return state;
        default:
            return state;
    }
};
