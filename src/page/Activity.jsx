import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from 'react-redux';
import { getallordersforuser } from '../state/Order/Action';
const Activity = () => {

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getallordersforuser({ jwt: localStorage.getItem("jwt"), }));
    console.log("users orders:", orders);
   },[]);

  return (
    <div className="p-5 lg:px-20">
      <h1 className="p-2 text-3xl font-semibold">Trading History</h1>
      <Table >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Quantity</TableHead>

            <TableHead>Status</TableHead>
            <TableHead className="">Date & Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    className="w-7 h-7"
                    src={item.orderItem?.coin.image}
                  ></AvatarImage>
                </Avatar>
                <span>{item.orderItem?.coin.name}</span>
              </TableCell>

              <TableCell>{item.orderItem?.buyprice}</TableCell>
              <TableCell>{item.orderItem?.sellprice}</TableCell>
              <TableCell>{item?.orderType}</TableCell>
              <TableCell>{item.orderItem?.quantity}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-center">
                <span className="flex flex-wrap w-5">
                  {item.timestamp}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Activity