import { useLocation } from "react-router-dom";
import { useState } from "react";
import Products from "../Component/Products";

const ProductLists = () => {
  // Hook to get the current location from the React Router
  const location = useLocation();

  // Extracting the category from the pathname
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,

      [e.target.name]: value,
    });
  };

  return (
    <div>
      <h1 className="m-5 text-4xl font-black text-[#394867] capitalize">
        {cat}
      </h1>
      <div className="flex justify-between">
        <div className="m-5 ">
          <span className="text-xl font-semibold mr-5 sm:mr-0">
            Filter Products:
          </span>
          <select
            className="p-2 mr-4 sm:mx-4"
            name="Color"
            onChange={handleFilters}
          >
            <option>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <objectption>L</objectption>
            <option>XL</option>
          </select>
        </div>
        <div className="m-5 ">
          <span className="text-xl font-semibold mr-5 sm:mr-0">
            Sort Products:
          </span>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <div className=" flex flex-wrap justify-between p-5">
        <Products cat={cat} filters={filters} sort={sort} />
      </div>
    </div>
  );
};

export default ProductLists;
