import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsAPI";
// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});