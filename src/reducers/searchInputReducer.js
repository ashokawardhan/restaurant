import {ACTION_TYPES_SEARCH} from '../actions/searchActions';
const initialState = {
    focus: false,
    searchText: '',
    currentSearchList: [],
    inList: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES_SEARCH.SAVE_SEARCH_TAG:
            if (action.search.length === 0) {
                return state;
            }
            const actionSearch = action.search.filter(search => state.currentSearchList.indexOf(search) === -1);
            const newSearchList = [
                ...state.currentSearchList,
                ...actionSearch
            ];
            return {
                ...state,
                currentSearchList: newSearchList,
                searchText: ''
            };
        case ACTION_TYPES_SEARCH.REMOVE_SEARCH_TAG:
            const removedSearchList = state.currentSearchList.filter(search => search !== action.search);
            return {
                ...state,
                currentSearchList: removedSearchList,
                searchText: ''
            };
        case ACTION_TYPES_SEARCH.FOCUS_SEARCH_FIELD:
            return {
                ...state,
                focus: true
            };
        case ACTION_TYPES_SEARCH.BLUR_SEARCH_FIELD:
            return {
                ...state,
                focus: false
            };
        case ACTION_TYPES_SEARCH.INPUT_TEXT_CHANGE:
            return {
                ...state,
                searchText: action.search,
                inList: false
            };
        case ACTION_TYPES_SEARCH.KEYBOARD_IN_LIST:
            return {
                ...state,
                inList: action.focus
            };
        default:
            return state;
    }
};
