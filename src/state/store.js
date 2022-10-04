import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas';
import charactersReducer from './characters';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    characters: charactersReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware
  ]
});

export default store;

sagaMiddleware.run(rootSagas);