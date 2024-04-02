import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div className="py-14 mt-8 mobile:mt-0 mobile:p-2 ">
      <h1 className="text-4xl font-black text-[#394867]  font-roboto-bold mobile:text-2xl">
        POPULAR PRODUCTS
      </h1>
      <div className="flex justify-between mt-3 mobile:flex-col">
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
