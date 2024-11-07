import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../../types"; // Book interface

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // API URL'nizi buraya girin
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => "/books",
        }),
        addBook: builder.mutation<void, Book>({
            query: (book) => ({
                url: "/books",
                method: "POST",
                body: book,
            }),
        }),
        updateBook: builder.mutation<void, Book>({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: "PUT",
                body: book,
            }),
        }),
        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = booksApi;
