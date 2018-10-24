import {ACTION_TYPES_AUTOCOMPLETE} from '../actions/autocompleteActions';
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES_AUTOCOMPLETE.LOADING_AUTOCOMPLETE:
            return state;
        case ACTION_TYPES_AUTOCOMPLETE.UPDATE_AUTOCOMPLETE:
            return action.list;
        case ACTION_TYPES_AUTOCOMPLETE.FAILED_AUTOCOMPLETE:
            return state;
        default:
            return state;
    }
};
