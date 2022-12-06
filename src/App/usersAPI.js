import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder) => ({
        users: builder.query({
            // headers: 'Content-type": "application/json',
            query: (data) => {
                return{
                    url: `/products`,
                    method: "GET",
                    body: data
                }
            }
        }),
    })
})

export const { useUsersQuery} = userApi