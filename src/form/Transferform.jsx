import React, { useEffect, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { transfermoneytodiffwallet } from "../state/wallet/Action";

const Transferform = () => {
  const dispatch = useDispatch();
  const { wallet } = useSelector(store => store);

  const [formData, setFormData] = useState({amount:'',walletid:'',purpose:'',});
 


 
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  const handleSumbit = () => {
     dispatch(transfermoneytodiffwallet({jwt:localStorage.getItem("jwt"),walletid:formData.walletid,reqdata:{amount:formData.amount,purpose:formData.purpose}}))
     console.log(formData);
   };
 
  return (
    <div>
      <div className="my-3">
        <div>
          <Label>Enter Amount</Label>
          <Input
            name="amount"
            className="text-lg rounded border-black"
            placeholder="$9999"
            onChange={handleChange}
            value={FormData.amount}
          />
        </div>
        <div>
          <Label>Enter Wallet Id</Label>
          <Input
            name="walletid"
            className="text-lg rounded border-black"
            placeholder="#87875413"
            onChange={handleChange}
            value={formData.walletid}
          />
        </div>
        <div>
          <Label>Purpose</Label>
          <Input
            name="purpose"
            className="text-lg rounded border-black"
            placeholder="gift for your friend"
            onChange={handleChange}
            value={formData.purpose}
          />
        </div>
      </div>
      <DialogClose>

      <Button onClick={handleSumbit}>Send Money</Button>
      </DialogClose>
    </div>
  );
};

export default Transferform;
