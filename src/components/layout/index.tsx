import type { ReactNode } from "react";
import { AppSidebar } from "../common/appSideBar";
import NavigationSideBar from "../common/navigationSideBar/inde";
import SubSidebar from "../common/subSideBar";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <NavigationSideBar />
      <SubSidebar/>
      <AppSidebar />
      <main>{children}</main>
    </div>
  );
};
