import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk'
import recentSearches from '../reducers/recentSearchesReducer';
import searchInput from '../reducers/searchInputReducer';
import autocomplete from '../reducers/autocompleteReducer';

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);

const rootReducer = combineReducers({
    recentSearches,
    searchInput,
    autocomplete
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
