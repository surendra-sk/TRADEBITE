import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../components/ui/button";
import {
  AvatarIcon,
  DragHandleHorizontalIcon,
  DragHandleVerticalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "../Navbar/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/Auth/Action";


const Navbar = () => {
  const dispatch = useDispatch()
  const {user}=useSelector((store)=>store.auth)
  const handlelogout = () => {
    dispatch(logout());
  }
  return (
    <div className="px-2 py-2 border-b z-50 bg-opacity-10 sticky top-0 left-0 right-0 flex justify-between items-center bg-background bg-black">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="rounded-full">
              <DragHandleHorizontalIcon className="h-7 w-7"></DragHandleHorizontalIcon>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle className=" text-3xl  flex justify-center items-center gap-1">
                <Avatar>
                  <AvatarImage className="h-9 w-9" src="https://m.media-amazon.com/images/I/61Iw4aixZ1L._AC_UF1000,1000_QL80_.jpg" />
                </Avatar>

                              <div>
                                  <span className="font-bold">Trade</span>
                                  <span className="font-bold text-green-400">Bite</span>
                </div>
              </SheetTitle>
                      </SheetHeader>
                      <Sidebar/>
                      
          </SheetContent>
        </Sheet>
        <p className="  text-xl lg:text-base cursor-pointer">
          TradeBite
        </p>
        <div className="p-0 ml-8">
          <Button variant="outline" className="flex items-center gap-3">
            <span>Search</span>
            <MagnifyingGlassIcon />
          </Button>
        </div>
      </div>
      <div>

        <Avatar>
          <AvatarFallback className="cursor-pointer" onClick={handlelogout}>{user?.fullname[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
