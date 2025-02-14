import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DollarSign, WalletIcon } from "lucide-react";
import { CopyIcon, ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import Topupform from "../form/Topupform";
import Transferform from "../form/Transferform";
import Withdrawalform from "../form/Withdrawalform";
import { useDispatch, useSelector } from "react-redux";
import { depositmoney, getuserwallet } from "../state/wallet/Action";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wallet = () => {
  
  const dispatch = useDispatch();
    const { userWallet } = useSelector((state) => state.wallet);
  const query = useQuery();
  const navigate=useNavigate()

  const orderId = query.get("order_id");
  const paymentId = query.get("razorpay_payment_id");
  // const razorpaypaymentid = query.get("razorpay_payment_link_id");

  useEffect(() => {
    if (orderId) {
      dispatch(depositmoney({jwt:localStorage.getItem("jwt"),orderid:orderId,paymentid:paymentId,navigate}))
    }
  },[orderId,paymentId])

  useEffect(() => {
    handlefetchuserwallet();
  },[])


  const handlefetchuserwallet = () => {
    dispatch(getuserwallet(localStorage.getItem("jwt")));
    
  }

  

  return (
    <div className="flex flex-col items-center">
      <div className="w-full pt-10 lg:w-[60%]">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1 ">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="flex flex-col text-xl ">
                    My Wallet
                  </CardTitle>
                  <div className="flex gap-2 ">
                    <p className="text-xs">wallet id- #{userWallet.id}</p>
                    <CopyIcon className="cursor-pointer hover:text-slate-400" />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon
                  onClick={handlefetchuserwallet}
                  className="w-6 h-6 cursor-pointer hover:text-slate-400 "
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-xl">$</span>
              <CardDescription>
                <p className="text-xl font-semibold">
                  {userWallet.balance}
                </p>
              </CardDescription>
            </div>
            <div className="pt-5 flex gap-3">
              <Dialog>
                <DialogTrigger className="h-16 w-16 rounded-2xl bg-slate-900 text-white text-sm">
                  Add Money
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                    <Topupform />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="h-16 w-16 rounded-2xl bg-slate-900 text-white text-sm">
                  With-Drawal
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>WithDrawal to Your Account</DialogTitle>
                    <Withdrawalform />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="h-16 w-16 rounded-2xl bg-slate-900 text-white text-sm">
                  Transfer Money
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transfer to other Wallet</DialogTitle>
                    <Transferform />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl">History</h1>
            <UpdateIcon className="h-7 w-7 cursor-pointer hover:text-gray-400" />
          </div>

          <div className="">
            <div className="flex flex-col py-5 gap-3">
              {[1, 1, 1, 1, 1].map((item, i) => (
                <Card key={i} className="flex justify-between items-center">
                  <div className="p-3">
                    <h1>WITHDRAWAL</h1>
                    <p className="text-sm">22/1/2025</p>
                  </div>

                  <div className="flex flex-row gap-1 px-2">
                    <span>85</span>
                    <p>USD</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
