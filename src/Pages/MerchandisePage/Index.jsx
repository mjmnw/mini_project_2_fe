import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import MerchandiseCard from "../../Components/Merchandisecard";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/merchandiseType");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/merchandiseType", {
        params: {
          merchandise_category: selectedCategory,
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/merchandiseCategory");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductList();
    } else {
      fetchAllProducts();
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            gap: 10,
            justifyContent: "center",
            paddingTop: 5,
            color: "white",
          }}
        >
          <a
            onClick={() => setSelectedCategory("")}
            style={{ cursor: "pointer" }}
          >
            All
          </a>
          {categories.length > 0 &&
            categories.map((merchandise_category) => {
              return (
                <a
                  key={merchandise_category.id}
                  onClick={() => setSelectedCategory(merchandise_category.merchandise_category)}
                  style={{ cursor: "pointer" }}
                >
                  {merchandise_category.merchandise_category}
                </a>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundColor: "black",
          }}
        >
          {products.length > 0 &&
            products.map((product) => {
              return <MerchandiseCard key={product.id} product={product} />;
            })}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
