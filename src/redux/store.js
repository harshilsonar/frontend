import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as ProductReducer } from "./products/reducer";
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({ auth: AuthReducer,product:ProductReducer});
 const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = legacy_createStore(persistedReducer,applyMiddleware(thunk));
export let persistor = persistStore(store)

