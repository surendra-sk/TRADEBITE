import {
  ActivityLogIcon,
  BookmarkIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../../components/ui/button";
import { SheetClose } from "../../components/ui/sheet";
import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../state/Auth/Action";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "PortFolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-6 w-6" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-6 w-6" />,
  },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-6 w-6" /> },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },
  
  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  
  { name: "Logout", path: "/signin", icon: <ExitIcon className="h-6 w-6" /> },
];

const Sidebar = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch(logout())
  }

  return (
    <div className="mt-10 space-y-5">
      {menu.map((item) => (
        <div key={item.name}>
          
            <SheetClose className="w-full h-full">
              <Button
              variant="outline"
              className="flex items-center gap-3 py-5 w-full"
              onClick={() => {
                
                if (item.name == "Logout") {
                  handlelogout()
                }
                navigate(item.path);
              }}
              
              >
                <span className="w-4">{item.icon}</span>
                <p>{item.name}</p>
              </Button>
            </SheetClose>
          
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
