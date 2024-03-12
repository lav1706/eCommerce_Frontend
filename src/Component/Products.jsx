import { PopularProducts } from "../data";
import Product from "./Product";
const Products = ({ cat, filters, sort }) => {
  return (
    <div className=" flex flex-wrap justify-between p-5">
      {PopularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
