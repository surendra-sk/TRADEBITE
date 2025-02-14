
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from '../components/ui/button';
import { useDispatch } from 'react-redux';
import {paymenthandler } from '../state/wallet/Action';



const Topupform = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setAmount(e.target.value);
  }
  const handleSumbit = () => {
    console.log(amount);
    const paymentMethod="RAZORPAY"
    dispatch(paymenthandler({ jwt: localStorage.getItem("jwt"),amount, paymentMethod}));
  }
  return (
    <div>
      <div>
        <h1>Enter Amount</h1>
        <Input
          onChange={handlechange}
          className="text-lg border-black rounded"
          placeholder="$9999"
          value={amount}
        />
        <p className="mt-3">Select payment method</p>
        <div>
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-32">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Razorpay</Label>
            </div>
           
          </RadioGroup>
        </div>
        <div>
          <Button onClick={handleSumbit} className=" rounded mt-5 w-full text-lg">Sumbit</Button>
        </div>
      </div>
    </div>
  );
}

export default Topupform 