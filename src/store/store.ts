import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import comments from '../reducer/comments';
import post from '../reducer/post';
import user from '../reducer/user';

const reducers = combineReducers({
    post: post,
    comments: comments,
    user: user
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer : persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),   
})     