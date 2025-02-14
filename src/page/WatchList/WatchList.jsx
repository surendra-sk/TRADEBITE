
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
import { Button } from "../../components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtowatchlist, getuserwatchlist } from "../../state/watchlist/Action";
import { exists } from "./exists";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const { items,userwatchlist } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getuserwatchlist({ jwt: localStorage.getItem("jwt") }));
    
  },[])


  const [ismarked, setIsMarked]= useState(true);
  // const setbookmark=(value) => {
  //  setIsMarked((prevState) =>
  //    prevState.includes(id)
  //      ? prevState.filter((item) => item !== id) // Remove from bookmark if exists
  //      : [...prevState, id]
  //  );
  // }
  const handleRemoveToWatchlist = (value) => {
    dispatch(addtowatchlist({ coinid: value, jwt: localStorage.getItem("jwt") }));
    console.log(value);
    
  }




  return (
    <div className="px-5 lg:px-15">
      <h1 className="text-3xl font-semibold m-2">WatchList</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1 Day High</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>change %</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              onClick={() => {
                navigate(`/market/${item.id}`);
              }}
              className="cursor-pointer"
              key={index}
            >
              <TableCell className="flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    className="w-7 h-7"
                    src={item.image}
                  ></AvatarImage>
                </Avatar>
                <span>{item.id}</span>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.high_24h}</TableCell>
              <TableCell>{item.price_change_24h}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                ${item.current_price}
              </TableCell>
              <TableCell>
                <Button
                  variant={ismarked ? "destructive" : "outline"}
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  size="icon"
                >
                  <BookmarkFilledIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WatchList