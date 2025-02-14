


import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
// import Home from "./page/Home/Home"

// import Navbar from './page/Navbar'
import Activity from "./page/Activity";
import Wallet from "./page/Wallet";
import Withdrawal from "./page/Withdrawal";
import StockDetails from "./page/StockDetails";
import WatchList from "./page/WatchList/WatchList";
import PortFolio from "./page/PortFolio";
import PaymentDetails from "./page/PaymentDetails";

import Auth from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "./state/Auth/Action";
import { BarLoader } from "react-spinners";
import Home from "./page/Home/Home";
import Navbar from "./page/Navbar/Navbar";





function App() {
 
  const { auth } = useSelector(store => store)
  const dispatch = useDispatch()
   const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    const fetchUser= () => {
      setLoading(true);
      dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
      setLoading(false);
    };

    fetchUser();
  }, [auth.jwt, dispatch]);

  // useEffect(() => {
   
  //   dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  // },[auth.jwt])
  
  return (
    <>
      {
        loading ? (
        <div className="flex justify-center items-center h-screen">
          <BarLoader className="mb-4" width={"100%"} color="#D91656" />
        </div>
      ) :
        
        
        
        auth.user ?
        <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/market/:id" element={<StockDetails />} />
          {/* <Route path="/search" element={<SearchCoin />} /> */}
          <Route path="/payment-details" element={<PaymentDetails />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      </div>:<Auth/>}
    </>
  );
}

export default App
