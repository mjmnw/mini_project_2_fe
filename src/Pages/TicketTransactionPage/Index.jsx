import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Productcard";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Reducer/Auth";

function TransactionDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const userSelector = useSelector((state) => state.auth);
  const [voucher, setVoucher] = useState("");
  const [voucherIsValid, setVoucherIsValid] = useState(null);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/event/${productId}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyTicketHandler = async () => {
    try {
      if (userSelector.balance >= product.ticket_price) {
        await axios.patch(`http://localhost:5000/event/${productId}`, {
          ticket_stock: product.ticket_stock - 1,
        });
        await axios.post(`http://localhost:5000/ticketPurchaseHistory`, {
          user_uniqueid: userSelector.id,
          ticket_uniqueid: product.id,
          ticket_purchase_amount: 1,
        });
        const res = await axios.patch(
          `http://localhost:5000/user/${userSelector.id}`,
          {
            balance: voucherIsValid
              ? userSelector.balance -
                product.ticket_price +
                voucherIsValid.discount_amount
              : userSelector.balance - product.ticket_price,
          }
        );
        dispatch(login(res.data));
        fetchProduct();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const voucherChecker = async () => {
    try {
      const res = await axios.get("http://localhost:5000/coupon", {
        params: {
          coupon_name: voucher,
        },
      });

      if (res.data.length > 0) {
        setVoucherIsValid(res.data[0]);
      } else {
        setVoucherIsValid(null);
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
        {product?.id && <ProductCard product={product} />}
        <div className="text-white">
          <input
            className="text-black"
            onChange={(e) => setVoucher(e.target.value)}
          />
          {voucherIsValid ? (
            <p className="text-green-300">Voucher is Valid</p>
          ) : (
            <p className="text-red-300">Voucher is Invalid</p>
          )}

          <button
            className="text-s text-red-100 border border-solid rounded-lg border-2 mt-5"
            onClick={voucherChecker}
          >
            Voucher Check
          </button>
          <button
            className="flex text-3xl text-red-100 border border-solid rounded-lg border-2 mb-40 mt-5 px-8 py-2"
            onClick={buyTicketHandler}
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransactionDetail;
