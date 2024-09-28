import Image from "next/image";
import React from "react";
import Logo1 from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div>
      <Image src={Logo1} width={50} height={50} alt="hello" />
    </div>
  );
};

export default Logo;
