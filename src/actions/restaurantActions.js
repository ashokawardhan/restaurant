import axios from 'axios';
import { saveSearch } from './searchActions';

export const ACTION_TYPES_RESTAURANT = {
    LOADING_RESTAURANTS: 'LOADING_RESTAURANTS',
    UPDATE_RESTAURANTS: 'UPDATE_RESTAURANTS',
    FAILED_RESTAURANTS: 'FAILED_RESTAURANTS',
    LOADING_ADD_RESTAURANTS: 'LOADING_ADD_RESTAURANTS',
    ADD_RESTAURANTS: 'ADD_RESTAURANTS',
    FAILED_ADD_RESTAURANTS: 'FAILED_ADD_RESTAURANTS',
    CHANGE_PAGE_NO: 'CHANGE_PAGE_NO',
};

export const changePage = pageNo => ({ type: ACTION_TYPES_RESTAURANT.CHANGE_PAGE_NO, pageNo });

const loadingRestaurantsList = () => ({ type: ACTION_TYPES_RESTAURANT.LOADING_RESTAURANTS });
const updateRestaurantsList = list => ({ type: ACTION_TYPES_RESTAURANT.UPDATE_RESTAURANTS, list });
const failedRestaurantsList = () => ({ type: ACTION_TYPES_RESTAURANT.FAILED_RESTAURANTS });

export const searchRestaurants = (searchList, searchText) => async (dispatch) => {
    let searchTextArray = [];
    if (searchText) {
        if (searchText.indexOf(' ') > -1 || searchText.indexOf(',') > -1) {
            searchTextArray = searchText.split(new RegExp(' |,', 'g')); //remove spaces and commas
        } else {
            searchTextArray = [searchText];
        }
        dispatch(saveSearch(searchTextArray));
    }
    searchTextArray = searchTextArray.filter(search => searchList.indexOf(search) === -1);
    const newSearchList = [...searchList, ...searchTextArray];
    if (!searchText || newSearchList !== searchList) {
        dispatch(loadingRestaurantsList());
        try {
            const res = await axios.post('/restaurants', { list: newSearchList, pageNo: 0 });
            dispatch(updateRestaurantsList(res.data));
        } catch (err) {
            dispatch(failedRestaurantsList(err.message));
        }
    }
};

const loadingAddRestaurantsList = pageNo => ({ type: ACTION_TYPES_RESTAURANT.LOADING_ADD_RESTAURANTS, pageNo });
const addRestaurantsList = (list, pageNo) => ({ type: ACTION_TYPES_RESTAURANT.ADD_RESTAURANTS, list, pageNo });
const failedAddRestaurantsList = () => ({ type: ACTION_TYPES_RESTAURANT.FAILED_ADD_RESTAURANTS });

export const changeRestaurantsPage = (searchList, pageNo) => async (dispatch) => {
    dispatch(loadingAddRestaurantsList(pageNo));
    try {
        const res = await axios.post('/restaurants', { list: searchList, pageNo });
        dispatch(addRestaurantsList(res.data, pageNo));
    } catch (err) {
        dispatch(failedAddRestaurantsList());
    }
};
