import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const mainReducer = combineReducers({ todos: todosSlice });

// const rootReducer = configureStore({
//   reducer: {
//     todos: todosSlice,
//   },
// });

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
