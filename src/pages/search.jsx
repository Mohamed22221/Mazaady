import { useGetAllCatsQuery } from "@/api/services/packagesApi";
import FormSearch from "@/components/search/formSearch";
import TabelSearch from "@/components/search/tabelSearch";
import React, { useState } from "react";

const search = () => {
  const allCats = useGetAllCatsQuery();
  const [dataForm, setDataForm] = useState({});
  console.log(dataForm.other)
  return (
    <div>
      <FormSearch allCats={allCats} setDataForm={setDataForm} />
      {Object.keys(dataForm).length > 0 && (
        <TabelSearch dataForm={dataForm} allCats={allCats?.data} />
      )}
    </div>
  );
};

export default search;
