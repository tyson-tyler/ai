import React from "react";
import Logo from "./Logo";
import List from "./List";
import Mick from "./mick";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-10 px-3 my-2">
      <div className="flex justify-start items-center">
        <Logo />
        <List />
      </div>
      <Mick />
    </div>
  );
};

export default Navbar;
