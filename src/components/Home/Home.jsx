import { useEffect, useContext } from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
// import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
import { CATEGORY } from "../../utils/constants";
import { PRODUCTS } from "../../utils/constants";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    // REMOVING BACKEND FOR NOW!!!
    // fetchDataFromApi("/api/products?populate=*").then((res) => {
    //   console.log(res);
    //   setProducts(res);
    // });
    setProducts(PRODUCTS);
  };

  const getCategories = () => {
    // REMOVING BACKEND FOR NOW!!!
    // fetchDataFromApi("/api/categories?populate=*").then((res) => {
    //   console.log(res);
    //   setCategories(res);
    // });

    setCategories(CATEGORY);
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
