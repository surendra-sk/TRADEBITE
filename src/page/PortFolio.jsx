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
import { getalluserasset } from '../state/asset/Action';
import { useNavigate } from 'react-router-dom';
const PortFolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userassets } = useSelector((state) => state.asset);
  useEffect(() => {
    dispatch(getalluserasset({ jwt: localStorage.getItem("jwt") }));
    console.log("user ke sare asset",userassets);
   },[]);







  return (
    <div className="p-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Current Price</TableHead>
            <TableHead>Value</TableHead>

            <TableHead className="text-right">Profit/Loss</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userassets.map((item, index) => (
            <TableRow
              key={index}
              className="cursor-pointer"
              onClick={() => {
                navigate(`/market/${item.coin.id}`);
              }}
            >
              <TableCell className="flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    className="w-7 h-7"
                    src={item.coin.image}
                  ></AvatarImage>
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.buy_price}</TableCell>
              <TableCell>${item.coin.current_price}</TableCell>
              <TableCell>
                ${(item.coin.current_price * item.quantity).toFixed(3)}
              </TableCell>
              <TableCell className="text-right">
                $
                {(
                  item.quantity *
                  (item.coin.current_price - item.buy_price)
                ).toFixed(4)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PortFolio