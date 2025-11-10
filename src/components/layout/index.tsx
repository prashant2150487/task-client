import type { ReactNode } from "react";
import NavigationSideBar from "../common/navigationSideBar/inde";
import SubSidebar from "../common/subSideBar";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <NavigationSideBar />
      <SubSidebar />
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
};
