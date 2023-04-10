import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3200/recipes";
export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Recipe"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getRecipe: builder.query({
            query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
            providesTags: (result, error, searchTerm) => [{
                type: 'Recipe',
                id: searchTerm,
            }]
        }),
    }),
});

export const {useGetRecipeQuery} = api;

export default api;
