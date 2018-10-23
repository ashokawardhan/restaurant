const initialState = {
    focus: false,
    searchText: '',
    currentSearchList: [],
    inList: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SEARCH':
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
        case 'REMOVE_SEARCH':
            const removedSearchList = state.currentSearchList.filter(search => search !== action.search);
            return {
                ...state,
                currentSearchList: removedSearchList,
                searchText: ''
            };
        case 'FOCUS_SEARCH':
            return {
                ...state,
                focus: true
            };
        case 'BLUR_SEARCH':
            return {
                ...state,
                focus: false
            };
        case 'SEARCH_INPUT':
            return {
                ...state,
                searchText: action.search,
                inList: false
            };
        case 'IN_LIST':
            return {
                ...state,
                inList: action.focus
            };
        default:
            return state;
    }
};
