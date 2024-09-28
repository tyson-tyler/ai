import Logo from "@/app/landing/components/navbar/Logo";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center  shadow-md px-5 w-full">
      <Logo />
      <UserButton />
    </div>
  );
};

export default Topbar;
