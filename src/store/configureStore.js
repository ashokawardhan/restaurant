import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk'
import { messageReducer } from '../reducers/messageReducer';
// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);
const rootReducer = combineReducers({
    message: messageReducer,
});
export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
