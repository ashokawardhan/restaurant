import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import recentSearches from '../reducers/recentSearchesReducer';
import searchInput from '../reducers/searchInputReducer';
import autocomplete from '../reducers/autocompleteReducer';
import restaurants from '../reducers/restaurantsReducer';

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);

const rootReducer = combineReducers({
    recentSearches,
    searchInput,
    autocomplete,
    restaurants,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(
        rootReducer,
        initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
