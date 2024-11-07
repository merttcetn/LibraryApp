import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./features/books/booksApi";
import sortReducer from "./features/sort/sortSlice"; // Import sort slice

const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        sort: sortReducer, // Add sort reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
