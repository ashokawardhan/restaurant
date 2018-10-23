console.log(window.localStorage.getItem('recentSearches'));
const initialState = JSON.parse(window.localStorage.getItem('recentSearches') || '[]');

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_SEARCH':
            if (state.indexOf(action.search) > -1) {
                return state;
            }
            const newState = [
                ...state,
                action.search
            ];
            window.localStorage.setItem('recentSearches', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};
