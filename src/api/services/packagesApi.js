import { wrapperAPI } from "../helper/wrapperApi";

export const packagesApi = wrapperAPI.injectEndpoints({
  reducerPath: "searchApi",
  tagTypes: ["search"],
  endpoints: (builder) => ({
    getAllCats: builder.query({
      providesTags: ["search"],
      query: () => ({
        url: `get_all_cats`,
        method: "GET",
      })
    }),
    getDetailsPackages: builder.query({
      providesTags: ["Packages"],
      query: (id) => `planTypes/show/${id}`,
    }),
  
  }),
  
});

export const {
  useGetAllCatsQuery,
  useGetDetailsPackagesQuery,



} = packagesApi;
