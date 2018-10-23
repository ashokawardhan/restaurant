const initialState = {
    focus: false,
    searchText: '',
    currentSearchList: [],
    inList: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SEARCH':
            if (!action.search || state.currentSearchList.indexOf(action.search) > -1) {
                return state;
            }
            const newSearchList = [
                ...state.currentSearchList,
                action.search
            ];
            return {
                ...state,
                currentSearchList: newSearchList,
                searchText: ''
            }
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
