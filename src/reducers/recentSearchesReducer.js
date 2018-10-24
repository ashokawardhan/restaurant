import { ACTION_TYPES_SEARCH } from '../actions/searchActions';
const initialState = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('recentSearches') || '[]') : [];

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES_SEARCH.SAVE_SEARCH_TAG:
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
