// import { configureStore } from "@reduxjs/toolkit"
// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
// import accountReducer from "@/features/accounts/slice/account.slice.ts"
// import { combineReducers } from "redux"
//
// const persistConfig = {
//   key: "root",
//   storage,
// }
//
// const rootReducer = combineReducers({
//   account: accountReducer,
// })
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })
//
// export type Dispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof rootReducer>
// export const persistor = persistStore(store)
