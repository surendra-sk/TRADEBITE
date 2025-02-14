import React, { useEffect } from 'react'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { BookMarkedIcon, BookmarkIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import TradingForm from '../form/TradingForm';
// import StockChart from './Home/StockChart';
import StockChart2 from './Home/stockchart2';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchcoindetails, searchcoin } from '../state/Coin/Action';
import { addtowatchlist, getuserwatchlist } from '../state/watchlist/Action';
import { exists } from './WatchList/exists';


const StockDetails = () => {
    const { coindetails } = useSelector((state) => state.coin);
    const { items } = useSelector((state) => state.watchlist);
  const dispatch=useDispatch()
  const { id } = useParams()
  // console.log("coin details is here",coin);
  console.log(id);
 
  const handleaddtowatchlist = () => {
    dispatch(
      addtowatchlist({
        coinid: coindetails.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }

  useEffect(() => {
    dispatch(fetchcoindetails({ coinid: id, jwt: localStorage.getItem("jwt") }));
    dispatch(getuserwatchlist({jwt: localStorage.getItem("jwt")}));
    
    
   },[id]);
    

  return (
    <div className="flex flex-col p-5  ">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Avatar>
            <AvatarImage
              className="w-10 h-10"
              src={coindetails?.image.small}
            ></AvatarImage>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p>{coindetails?.symbol.toUpperCase()}</p>
              <p>{coindetails?.name}</p>
            </div>
            <div className="flex gap-2">
              <p>${coindetails?.market_data.current_price.usd}</p>
              <p>
                {coindetails?.market_data.market_cap_change_24h}(
                {coindetails?.market_data.market_cap_change_percentage_24h}
                %)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger>
              <Button>Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How Much You wanna Trade</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
          <Button onClick={handleaddtowatchlist}>
            {exists(items, coindetails) ? (
              <BookmarkFilledIcon />
            ) : (
              <BookmarkIcon />
            )}
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <StockChart2 coinid={id} />
      </div>
    </div>
  );
}

export default StockDetails