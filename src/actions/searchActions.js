export const ACTION_TYPES_SEARCH = {
    REMOVE_SEARCH_TAG: "REMOVE_SEARCH_TAG",
    FOCUS_SEARCH_FIELD: "FOCUS_SEARCH_FIELD",
    BLUR_SEARCH_FIELD: "BLUR_SEARCH_FIELD",
    INPUT_TEXT_CHANGE: "INPUT_TEXT_CHANGE",
    KEYBOARD_IN_LIST: "KEYBOARD_IN_LIST",
    SAVE_SEARCH_TAG: "SAVE_SEARCH_TAG"
}
export const saveSearch = searchText => ({ type: ACTION_TYPES_SEARCH.SAVE_SEARCH_TAG, search: searchText });
export const removeSearch = searchText => ({ type: ACTION_TYPES_SEARCH.REMOVE_SEARCH_TAG, search: searchText });
export const focusSearch = () => ({ type: ACTION_TYPES_SEARCH.FOCUS_SEARCH_FIELD });
export const blurSearch = () => ({ type: ACTION_TYPES_SEARCH.BLUR_SEARCH_FIELD });
export const changeSearch = searchText => ({ type: ACTION_TYPES_SEARCH.INPUT_TEXT_CHANGE, search: searchText });
export const inList = focus => ({ type: ACTION_TYPES_SEARCH.KEYBOARD_IN_LIST, focus});
