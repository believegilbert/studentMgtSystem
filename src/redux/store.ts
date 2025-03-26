import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userReducer";

// Redux Persist is a library that helps you to persist and rehydrate a redux store.
// It stores the store in the local storage of the browser so that the state is not lost even after the page is refreshed.
// The persistStore function is used to create a persistor object that will be used to persist and rehydrate the store.
// The persistor object is then passed to the PersistGate component in the App.js file.
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  const persistReducers = persistReducer(persistConfig, userReducer);

  //if we are authenticating from the backend and do not beed persisting the data, we can use the following code only without the middleware object and export only stoire as default
  export const store = configureStore({
    reducer:{
        user: persistReducers
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  })

  export const persistor = persistStore(store);
export default store;