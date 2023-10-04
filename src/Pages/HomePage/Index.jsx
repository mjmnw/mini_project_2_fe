import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "../../Components/Productcard";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTicket, setSearchTicket] = useState("");

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/event");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductList = async () => {
    try {
      let config = {};

      if (selectedCategory && searchTicket) {
        config = {
          params: {
            ticket_category: selectedCategory,
            ticket_name: searchTicket,
          },
        };
      } else if (selectedCategory !== "" && !searchTicket) {
        config = {
          params: {
            ticket_category: selectedCategory,
          },
        };
      } else if (searchTicket !== "" && !selectedCategory) {
        config = {
          params: {
            ticket_name: searchTicket,
          },
        };
      }
      const res = await axios.get("http://localhost:5000/event", config);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/ticketCategories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = (props) => {
    setSearchTicket(props);
  };

  // useEffect(() => {
  //   if (selectedCategory || searchTicket) {
  //     fetchProductList();
  //   } else {
  //     fetchAllProducts();
  //   }
  // }, [selectedCategory, searchTicket]);

  useEffect(() => {
    fetchProductList();
  }, [searchTicket, selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <main>
        <Navbar searchHandler={searchHandler} />
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            gap: 40,
            paddingLeft: 75,
            justifyContent: "start",
            paddingTop: 20,
            color: "white",
            fontSize: 20,
          }}
        >
          <a
            onClick={() => setSelectedCategory("")}
            style={{ cursor: "pointer" }}
          >
            All
          </a>
          {categories.length > 0 &&
            categories.map((ticket_category) => {
              return (
                <a
                  key={ticket_category.id}
                  onClick={() =>
                    setSelectedCategory(ticket_category.ticket_category)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {ticket_category.ticket_category}
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
              return <Productcard key={product.id} product={product} />;
            })}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
