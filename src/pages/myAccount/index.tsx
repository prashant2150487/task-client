import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Divider from "./divider";
import Features from "./features";

const MyAccount = () => {
  return (
    <div className="h-screen bg-[#1A222C]">
      <header className="bg-gray-600 border-b p-3 text-white font-bold pl-4">
        <h3>My Account</h3>
      </header>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-1 bg-red-300 p-10 max-w-7xl">
          <Avatar className="bg-amber-600 size-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <h2 className="font-bold text-white text-2xl">Prashant Sachan</h2>
          <Button variant="link" size="lg" className="cursor-pointer">
            Logout
          </Button>
        </div>
        <Divider title="Account" />
        <Features />
      </div>
    </div>
  );
};

export default MyAccount;
