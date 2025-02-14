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
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from '../../components/ui/scroll-area';


const AssetTable = ({coin,category}) => {
 
  const navigate = useNavigate()
  
  // console.log(coin.coindetails);
  






  return (
    <div>
      <Table>
        <ScrollArea className={`${category=="all"?"h-[74vh]":"h-[82vh]"}`}>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Coin</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>MarketCap</TableHead>
              <TableHead>24hr %</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coin?.map((item, index) => (
              <TableRow
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/market/${item.id}`);
                }}
                key={index}
              >
                <TableCell className="flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage
                      className="w-7 h-7"
                      src={item.image}
                    ></AvatarImage>
                  </Avatar>
                  <span>{item.name}</span>
                </TableCell>
                <TableCell>{item.symbol.toUpperCase()}</TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>{item.market_cap}</TableCell>
                <TableCell>{item.price_change_percentage_24h}%</TableCell>
                <TableCell className="text-right">${item.ath}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  );
}

export default AssetTable
