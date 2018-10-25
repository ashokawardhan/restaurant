import axios from 'axios';

export const ACTION_TYPES_AUTOCOMPLETE = {
    LOADING_AUTOCOMPLETE: 'LOADING_AUTOCOMPLETE',
    UPDATE_AUTOCOMPLETE: 'UPDATE_AUTOCOMPLETE',
    FAILED_AUTOCOMPLETE: 'FAILED_AUTOCOMPLETE',
};
const loadingAutocompleteList = current => (
    { type: ACTION_TYPES_AUTOCOMPLETE.LOADING_AUTOCOMPLETE, current }
);
const updateAutocompleteList = list => (
    { type: ACTION_TYPES_AUTOCOMPLETE.UPDATE_AUTOCOMPLETE, list }
);
const failedAutocompleteList = () => ({ type: ACTION_TYPES_AUTOCOMPLETE.FAILED_AUTOCOMPLETE });

export const autoCompleteText = text => async (dispatch) => {
    dispatch(loadingAutocompleteList(text));
    try {
        const res = await axios.post('/autocomplete', { text });
        dispatch(updateAutocompleteList(res.data));
    } catch (err) {
        dispatch(failedAutocompleteList());
    }
};
