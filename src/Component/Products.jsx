import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/v1/product?category=${cat}`
            : "http://localhost:5000/api/v1/product"
        );
        setProducts(response.data);
        console.log(response.data);

        // handle success
      } catch (error) {
        if (error.code === "ECONNABORTED") {
          // handle timeout
        } else if (!error.status) {
          // handle network error
        } else {
          // handle other errors
        }
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      const result = products.filter((product) =>
        Object.entries(filters).every(
          ([key, value]) => product[key] && product[key].includes(value)
        )
      );
      setFilteredProducts(result);
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="p-14 mt-2">
      <div className=" flex flex-wrap justify-between">
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default Products;
