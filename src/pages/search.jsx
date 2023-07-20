import { useGetAllCatsQuery } from "@/api/services/packagesApi";
import FormSearch from "@/components/search/formSearch";
import TabelSearch from "@/components/search/tabelSearch";
import React, { useState } from "react";

const search = () => {
  const allCats = useGetAllCatsQuery();
  const [dataForm , setDataForm] = useState({})
  return (
    <div>
      <FormSearch allCats={allCats} setDataForm={setDataForm} />
      <TabelSearch dataForm={dataForm} allCats={allCats?.data} />
    </div>
  );
};

export default search;
