import type { ReactNode } from "react";
import { AppSidebar } from "../common/appSideBar";
import NavigationSideBar from "../common/navigationSideBar/inde";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <NavigationSideBar />
      <AppSidebar />
      <main>{children}</main>
    </div>
  );
};
