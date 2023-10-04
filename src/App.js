import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Index";
import Merchandise from "./Pages/MerchandisePage/Index";
import MyAccount from "./Pages/MyAccountPage/Index";
import TransactionDetail from "./Pages/TicketTransactionPage/Index";
import MerchandiseTransactionDetail from "./Pages/MerchandiseTransactionPage/Index";
import TnC from "./Pages/TermsAndConditionsPage/Index";
import AboutUsPage from "./Pages/AboutUsPage/Index";
import NotFound from "./Pages/PageNotFound/Index";
import { Provider } from "react-redux";
import KeepLogin from "./AppWrapper/KeepLogin";
import Register from "./Pages/RegisterPage/Index";
import { store } from "./Redux/Store";
import Login from "./Pages/LoginPage/Index";
import ChangePassword from "./Pages/ChangePassword/Index";

// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <KeepLogin>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/transaction" element={<TransactionDetail />} />
            <Route path="/transaction-confirmation/:productId" element={<TransactionDetail />} />
            <Route path="/merchandise-confirmation/:productId" element={<MerchandiseTransactionDetail />} />
            <Route path="/termsandconditions" element={<TnC />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
        </KeepLogin>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
