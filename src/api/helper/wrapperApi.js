import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const domain = "https://staging.mazaady.com/api/v1/";
export const apiKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16"

export const wrapperAPI = createApi({
  reducerPath: "wrapperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: domain,
    prepareHeaders: (header) => {
      header.set("private-key", `${apiKey}`);
      return header;
    },
  }),
  endpoints: () => ({}),
});
