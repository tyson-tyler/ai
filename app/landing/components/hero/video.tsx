import Image from "next/image";
import React from "react";
import Hello from "../../../assets/1.webp";

const Videoapp = () => {
  return (
    <div className="mt-5 p-5 flex justify-center items-center ">
      <main>
        <Image src={Hello} alt="hello" width={500} height={700} />
      </main>
    </div>
  );
};

export default Videoapp;
