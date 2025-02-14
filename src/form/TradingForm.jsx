import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getuserwallet } from "../state/wallet/Action";
import { getassetbyid, getassetdetails } from "../state/asset/Action";
import { payorder } from "../state/Order/Action";

const TradingForm = () => {
  const [amount, setAmount] = useState();
  const { wallet, coin,asset } = useSelector((store) => store);
  const [ordertype, setOrderType] = useState('BUY');
  const [quantity, setQuantity] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const am = e.target.value;
    setAmount(am) 
    const volume = calculate(am, coin.coindetails.market_data.current_price.usd);
    setQuantity(volume);
    console.log(volume);
    
   };
  const calculate = (amount, currentcoinprice) => {
    let volume = amount / currentcoinprice;
    let decimalplacecount=Math.max(2,currentcoinprice.toString().split(".")[0].length)
    return volume.toFixed(decimalplacecount);
  };
 
  useEffect(() => { 
    dispatch(getuserwallet(localStorage.getItem("jwt")));
    dispatch(
      getassetdetails({
        coinid: coin.coindetails?.id,
        jwt: localStorage.getItem("jwt"),})
    );
  }, []);

  const handlebuycrypto = () => {
    console.log("handle buy crpto data","coinid:", coin.coindetails?.id,"quantity",quantity);
    dispatch(payorder({
      jwt: localStorage.getItem("jwt"),amount ,orderdata: {
        coinId: coin.coindetails?.id, quantity, orderType:ordertype,
      
    } }));
  }

 
  

    
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        {ordertype == "BUY" ? (
          <Input
            className="py-5 border-slate-500"
            placeholder="Enter an Amount"
            onChange={handleChange}
            type="number"
            name="amount"
            value={amount}
          />
        ) : (
          <Input
            className="py-5 border-slate-500"
            placeholder="Enter Quantity"
            onChange={handleChange}
            type="number"
            name="quantity"
            value={amount}
          />
        )}
        <p className="border border-black  text-xl flex justify-center items-center w-32 h-10 rounded-md">
          {quantity ? quantity : 0}
        </p>
      </div>
      {(ordertype == "BUY" ? amount > wallet.userWallet?.balance : false) && (
        <h1 className="flex justify-center text-red-500 text-lg">
          Insufficient Balance
        </h1>
      )}
      {(ordertype == "SELL"
        ? amount > asset.assetdetails?.quantity
        : false) && (
        <h1 className="flex justify-center text-red-500 text-lg">
          Insufficient Quantity
        </h1>
      )}
      <div>
        <div className="flex gap-5">
          <Avatar>
            <AvatarImage
              className="w-10 h-10"
              src={coin.coindetails?.image.large}
            ></AvatarImage>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p>{coin.coindetails?.symbol.toUpperCase() || "BTC"}</p>
              <p>{coin.coindetails?.id.toUpperCase() || "Bitcoin"}</p>
            </div>
            <div className="flex gap-2">
              <p>${coin.coindetails?.market_data.current_price.usd || 80000}</p>
              <p className="text-green-600">
                {coin.coindetails?.market_data.market_cap_change_24h}(
                {coin.coindetails?.market_data.market_cap_change_percentage_24h}
                %)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex justify-between">
        {ordertype == "BUY" ? (
          <p>Available Balance</p>
        ) : (
          <p>Available Quantity</p>
        )}
        {ordertype == "BUY" ? (
          <p>${wallet.userWallet?.balance || 0.0}</p>
        ) : (
          <p>{asset.assetdetails?.quantity || 0.0}</p>
        )}
      </div>

      <div>
        <Button
          onClick={handlebuycrypto}
          variant={ordertype == "SELL" ? "destructive" : "default"}
          className="w-full rounded text-lg"
        >
          {ordertype}
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setOrderType(ordertype == "BUY" ? "SELL" : "BUY");
          }}
          variant={ordertype == "BUY" ? "destructive" : "default"}
          className="w-full rounded text-lg"
        >
          {ordertype == "BUY" ? "Sell" : "BUY"}
        </Button>
      </div>
    </div>
  );
};

export default TradingForm;
