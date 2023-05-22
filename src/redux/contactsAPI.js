import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6469e49803bb12ac2094cf40.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getMaterials: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getMaterialById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    addMaterial: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteMaterial: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateMaterial: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useAddMaterialMutation,
  useDeleteMaterialMutation,
  useGetMaterialByIdQuery,
  useGetMaterialsQuery
} = contactsApi;