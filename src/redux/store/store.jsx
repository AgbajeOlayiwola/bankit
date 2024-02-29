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
import { queryApi } from "../api/query"
import profileReducer from "../slices/profileSlice"
import tokenReducer from "../slices/tokenSlice"

const reducers = combineReducers({
  [mutationApi.reducerPath]: mutationApi.reducer,
  [queryApi.reducerPath]: queryApi.reducer,
  profile: profileReducer,
  token: tokenReducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile", "token"],
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
