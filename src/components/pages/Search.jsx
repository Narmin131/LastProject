import React from "react";
import { useState } from "react";
import data from "../data/mainData";
import ProductItem from "../pages/common/ProductItem2";
import Banner from "./common/Banner";

import { useTranslation } from "react-i18next";
const Search = () => {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();
  return (
    <>
      <Banner title={t("about.2")} />
      <div className="my-3">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={()=>setQuery('')}>Clear</button>
      </div>

      <div className="container">
        <div className="row">
          {data
            .filter((u) => u.title.toLocaleLowerCase().includes(query))
            .map((item, index) => (
              <div className="col-lg-6 p-3" key={index}>
                <ProductItem product={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
