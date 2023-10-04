import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import MerchandiseCard from "../../Components/Merchandisecard";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Reducer/Auth";

function MerchandiseTransactionDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/merchandiseType/${productId}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyMerchandiseHandler = async () => {
    try {
      if (userSelector.points >= product.merchandise_price) {
        await axios.patch(
          `http://localhost:5000/merchandiseType/${productId}`,
          {
            merchandise_stock: product.merchandise_stock - 1,
          }
        );
        await axios.post(`http://localhost:5000/merchandisePurchaseHistory`, {
          user_uniqueid: userSelector.id,
          merchandise_uniqueid: product.id,
          merchandise_purchase_amount: 1,
        });

        const res = await axios.patch(
          `http://localhost:5000/user/${userSelector.id}`,
          {
            points: userSelector.points - 1,
          }
        );
          dispatch(login(res.data))
        fetchProduct();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-20 bg-black px-5 items-center">
        {product?.id && <MerchandiseCard product={product} />}
        <div className="text-white">
          <button
            className="text-3xl text-red-100 border border-solid rounded-lg border-2 mb-40 mt-5"
            onClick={buyMerchandiseHandler}
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MerchandiseTransactionDetail;