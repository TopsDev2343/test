import { configureStore, combineReducers } from '@reduxjs/toolkit'

import auth from './authSlice'
import modal from './modalSlice'
import report from './reportSlice'
import books from './bookSlice';

const combinedReducer = combineReducers({
    auth,
    modal,
    report,
    books
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/logout/pending') {
        state = undefined;
    }
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: false
})

export default store