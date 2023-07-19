import { useGetAllCatsQuery } from "@/api/services/packagesApi";
import FormSearch from "@/components/search/formSearch";
import React from "react";

const search = () => {
  const allCats = useGetAllCatsQuery();
  console.log(allCats);
  return (
    <div>

      <FormSearch allCats={allCats} />
    </div>
  );
};

export default search;
