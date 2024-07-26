import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query/react"
import { combineReducers } from "redux"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { mutationApi } from "../api/mutationApi"
import { queryApi } from "../api/queryApi"
import airtimeReducer from "../slices/airtimeSlice"
import configdataReducer from "../slices/configurationDataSlice"
import editAdminReducer from "../slices/editAdminSlice"
import loginReducer from "../slices/loginSlice"
import profileReducer from "../slices/profileSlice"
import signupReducer from "../slices/signupSlice"
import tokenReducer from "../slices/tokenSlice"
import compProfileReducer from "../slices/compProfileSlice"
const reducers = combineReducers({
  [mutationApi.reducerPath]: mutationApi.reducer,
  [queryApi.reducerPath]: queryApi.reducer,
  profile: profileReducer,
  token: tokenReducer,
  configdata: configdataReducer,
  editAdmin: editAdminReducer,
  airtime: airtimeReducer,
  login: loginReducer,
  signup: signupReducer,
  compProfile: compProfileReducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "profile",
    "token",
    "configdataReducer",
    "editAdmin",
    "airtime",
    "login",
    "signup",
    "compProfile",
  ],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mutationApi.middleware, queryApi.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
