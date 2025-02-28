import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Kết quả tìm kiếm cho: {query}</h1>
      <p>Trang vẫn đang trong quá trình hoàn thiện.</p>
    </div>
  );
};

export default Search;
