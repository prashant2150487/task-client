import { Button } from "@/components/ui/button";
import logo from "../../../assets/images/logo.png";
import {
  BriefcaseBusiness,
  ChartAreaIcon,
  HomeIcon,
  SearchIcon,
} from "lucide-react";

import NavUser from "./navUser";
import { Link } from "react-router";
const NavigationSideBar = () => {
  return (
    <div className="text-black bg-[#274182] min-h-screen w-18 border-0 flex flex-col items-center justify-between p-2.5 pt-4">
      <div className="flex items-center flex-col gap-3">
        <Link to="/">
          <img src={logo} alt="logo" className="size-7 mx-auto" />
        </Link>
        <Button size="icon" className="bg-transparent bg-none">
          <HomeIcon className="size-sm" />
        </Button>
        <Button size="icon" className="bg-transparent bg-none">
          <BriefcaseBusiness className="size-sm" />
        </Button>
        <Button size="icon" className="bg-transparent bg-none">
          <HomeIcon className="size-sm" />
        </Button>
        <Button size="icon" className="bg-transparent bg-none">
          <HomeIcon className="size-sm" />
        </Button>
      </div>
      <div className="flex items-center flex-col gap-2">
        <Button size="icon" className="bg-transparent bg-none">
          <ChartAreaIcon className="size-sm" />
        </Button>
        <Button size="icon" className="bg-transparent bg-none">
          <SearchIcon className="size-sm" />
        </Button>
        <Button size="icon" className="bg-transparent bg-none">
          <HomeIcon className="size-sm" />
        </Button>
        <NavUser />
      </div>
    </div>
  );
};

export default NavigationSideBar;
