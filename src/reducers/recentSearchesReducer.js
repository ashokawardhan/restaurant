console.log(window.localStorage.getItem('recentSearches'));
const initialState = JSON.parse(window.localStorage.getItem('recentSearches') || '[]');

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_SEARCH':
            const actionSearch = action.search.filter(search => state.indexOf(search) === -1);
            const newState = [
                ...state,
                ...actionSearch
            ];
            window.localStorage.setItem('recentSearches', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};
