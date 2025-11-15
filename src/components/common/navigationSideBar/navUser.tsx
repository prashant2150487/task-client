import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, CreditCard, LogOut, MessageSquareDot } from "lucide-react";
import { Link } from "react-router";

const NavUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="size-xs"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <Button size="icon" className="bg-transparent bg-none"></Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" sideOffset={15} className="w-xs bg-white text-shadow-black shadow-sm">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="size-xs"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Sachan</span>
              <span className="text-muted-foreground truncate text-xs">
                psachan04@gmail.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link to="/my-account" className="flex gap-2 items-center">
              <CircleUser />
               Account Setting
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            {/* <IconCreditCard /> */}
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <MessageSquareDot />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavUser;
