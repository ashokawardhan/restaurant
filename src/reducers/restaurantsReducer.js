import { ACTION_TYPES_RESTAURANT } from '../actions/restaurantActions';

const initialState = {
    loadingInitial: false,
    failureInitial: false,
    restaurants: [],
    currentPageNo: -1,
    loadingAdd: false,
    failureAdd: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ACTION_TYPES_RESTAURANT.CHANGE_PAGE_NO:
        return {
            ...state,
            currentPageNo: action.pageNo,
        };
    case ACTION_TYPES_RESTAURANT.LOADING_RESTAURANTS:
        return {
            ...initialState,
            loadingInitial: true,
        };
    case ACTION_TYPES_RESTAURANT.UPDATE_RESTAURANTS:
        return {
            ...state,
            restaurants: action.list,
            currentPageNo: 0,
            loadingInitial: false,
        };
    case ACTION_TYPES_RESTAURANT.FAILED_RESTAURANTS:
        return {
            ...state,
            loadingInitial: false,
            failureInitial: true,
        };
    case ACTION_TYPES_RESTAURANT.LOADING_ADD_RESTAURANTS:
        return {
            ...state,
            loadingAdd: true,
            failureAdd: false,
        };
    case ACTION_TYPES_RESTAURANT.ADD_RESTAURANTS:
        return {
            ...state,
            restaurants: [
                ...state.restaurants,
                ...action.list,
            ],
            currentPageNo: action.pageNo,
            loadingAdd: false,
        };
    case ACTION_TYPES_RESTAURANT.FAILED_ADD_RESTAURANTS:
        return {
            ...state,
            loadingAdd: false,
            failureAdd: true,
        };
    default:
        return state;
    }
};
