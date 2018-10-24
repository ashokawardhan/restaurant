import {ACTION_TYPES_RESTAURANT} from '../actions/restaurantActions';
const initialState = {
    loadingInitial: false,
    failureInitial: false,
    restaurants: {},
    currentPageNo: -1,
    loadingPageNo: -1,
    loadingAdd: false,
    failureAdd: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES_RESTAURANT.LOADING_RESTAURANTS:
            return {
                ...initialState,
                loadingInitial: true,
                loadingPageNo: 0
            };
        case ACTION_TYPES_RESTAURANT.UPDATE_RESTAURANTS:
            return {
                ...state,
                restaurants: { 0: action.list },
                currentPageNo: 0,
                loadingInitial: false
            };
        case ACTION_TYPES_RESTAURANT.FAILED_RESTAURANTS:
            return {
                ...state,
                loadingInitial: false,
                loadingPageNo: -1,
                failureInitial: true
            };
        case ACTION_TYPES_RESTAURANT.LOADING_ADD_RESTAURANTS:
            return {
                ...state,
                loadingPageNo: action.pageNo,
                loadingAdd: true,
                failureAdd: false
            };
        case ACTION_TYPES_RESTAURANT.ADD_RESTAURANTS:
            return {
                ...state,
                restaurants: {
                    ...state.restaurants,
                    [action.pageNo]: action.list
                },
                currentPageNo: action.pageNo,
                loadingAdd: false
            };
        case ACTION_TYPES_RESTAURANT.FAILED_ADD_RESTAURANTS:
            return {
                ...state,
                loadingAdd: false,
                failureAdd: true,
                loadingPageNo: state.currentPageNo
            };
        default:
            return state;
    }
}
