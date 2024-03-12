import { categories } from "../data";

import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div className="flex justify-between p-4">
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
