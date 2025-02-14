import React, { useEffect } from 'react'
import { Button } from '../../components/ui/button'
import AssetTable from './AssetTable'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StockChart from './StockChart';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import StockChart2 from './stockchart2';
import Auth from '../../Auth';
import { useDispatch, useSelector } from 'react-redux';
import { getcoinlist, gettop50coinlist } from '../../state/Coin/Action';
import { useParams } from 'react-router-dom';


const Home = () => {
  const [category, setCategory] = React.useState("all");
  const dispatch = useDispatch();
  const { coindetails, top50, coinlist } = useSelector((state) => state.coin);
  // console.log("coin details is here",coindetails);
  

  const handleCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    dispatch(gettop50coinlist());
  },[category])


  useEffect(() => {
    dispatch(getcoinlist(1));
    console.log("coinlist",coinlist);
  }, []);

  return (
    <div className="p-3 h-screen relative">
      <div className="lg:flex h-screen ">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-2 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topgainers")}
              variant={category == "topgainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("toplossers")}
              variant={category == "toplossers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Lossers
            </Button>
          </div>
          <AssetTable coin={category=="all"?coinlist:top50} category={category}/>
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          {/* <StockChart /> */}
          <StockChart2 coinid={"bitcoin"}/>
          <div className="flex gap-5">
            <Avatar>
              <AvatarImage
                className="w-10 h-10"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNYYPTbBU17CbvR5JIjgU7TVqu0T6ry7A9g&s"
                }
              ></AvatarImage>
            </Avatar>
            <div className="flex flex-row items-center">
              <div className="flex gap-2 items-center">
                <p>BTC</p>
                <p>BITCOIN</p>
              </div>
              <div className="flex gap-2">
                {/* <p>$3689.97</p>
                <p>1454414(0.421424%)</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home