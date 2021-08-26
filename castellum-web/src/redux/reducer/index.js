import { createStore, combineReducers } from 'redux';
import alphabetReducer from './alphabetReducer';

const rootReducer = combineReducers ({
    alphabet: alphabetReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;