import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/auth-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistedReducer = persistReducer(authConfig, authReducer);

// Persisting token field from auth slice to localstorage

export const store = configureStore({
  reducer: {
      contacts: contactsReducer,
  filters: filterReducer,
  auth: authPersistedReducer,
},
middleware,
// devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
