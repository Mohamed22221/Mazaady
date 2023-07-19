
import { wrapperAPI } from "../helper/wrapperApi";
import searchSlice from "../services/searchSlice";

export const reducer = {
  [wrapperAPI.reducerPath]: wrapperAPI.reducer,
  search: searchSlice,

};
