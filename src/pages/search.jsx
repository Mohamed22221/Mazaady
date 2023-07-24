import { useGetAllCatsQuery } from "@/api/services/packagesApi";
import BuildSearch from "@/components/search/buildSearch";
import BuildTabel from "@/components/search/buildTabel";
import React, { useState } from "react";

const Search = () => {
  const allCats = useGetAllCatsQuery();
  const [dataForm, setDataForm] = useState({});
  return (
    <div>
      <BuildSearch allCats={allCats} setDataForm={setDataForm} />
      {Object.keys(dataForm).length > 0 && (
        <BuildTabel dataForm={dataForm} allCats={allCats?.data} />
      )}
    </div>
  );
};

export default Search;
