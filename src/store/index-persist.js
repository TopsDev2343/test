import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import auth from './authSlice'
import modal from './modalSlice'
import sound from './soundSlice'
import remote from './remoteSlice'
import mode from './modeSlice'
import config from './configSlice'
import commands from './commandsSlice'
import devices from './devicesSlice'
import routing from './reportSlice'

const persistConfig = {
    //...
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['root', 'modal', 'routing']
    // blacklist: ['devices', 'auth', 'commands'],

}

const combinedReducer = combineReducers({
    auth,
    modal,
    sound,
    remote,
    mode,
    commands,
    config,
    devices,
    routing
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/logout/pending') {
        state = undefined;
    }
    return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: false
})

export const persistor = persistStore(store)