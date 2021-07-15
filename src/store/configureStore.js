import { autoRehydrate, persistStore } from "redux-persist-immutable";
import { combineReducers } from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import { REHYDRATE } from "redux-persist/constants";
import Immutable from "immutable";
import { applyMiddleware, compose, createStore } from "redux";

import AsyncStorage from "@react-native-community/async-storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer"
import mainReducer from "../reducers/mainReducer"


const combinedReducers = combineReducers({
    root: rootReducer,
    main: mainReducer
});

const initialState = new Immutable.Map({
    root: Immutable.Map({
        isLoading: false,
    }),
    main: Immutable.Map({
        list: []
    }),
});

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combinedReducers,
        initialState,
        compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({ log: true }))
    );

    persistStore(
        store,
        {
            storage: AsyncStorage,
            blacklist: ['root'],
        }
    );
    return {
        ...store, runSaga: []
    };
}