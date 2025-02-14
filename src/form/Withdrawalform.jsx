import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const Withdrawalform = () => {
  const [amount, setAmount] = useState("");
  const handleamount = (e) => {
    setAmount(e.target.value);
  };

  const handleSumbit=()=>{console.log(amount);}
  return (
    <div>
      <div className="flex justify-between items-center text-lg">
        <p>Available Balance</p>
        <p>$44544</p>
      </div>
      <div className="flex flex-col items-center my-5">
        <h1>Enter Withdrawal Amount</h1>
        <Input
          className="text-center text-lg w-[50%] py-5"
          placeholder="$9999"
          value={amount}
          onChange={handleamount}
        />
      </div>
      <div>
        <p>Transfer to</p>
        <div className="flex my-3">
          <RadioGroup
            defaultValue="option-one"
            className="flex flex-row gap-32"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <div className="flex flex-col">
                <Label htmlFor="option-one">HDFC BANK</Label>
              <Label htmlFor="option-one">Acc. No -78956478854</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="flex mt-5 justify-center">
          <DialogClose>

          <Button className="text-center text-lg " onClick={handleSumbit }>WithDrawal Money</Button>
          </DialogClose>
        </div>
      </div>
    </div>
  );
};

export default Withdrawalform;
