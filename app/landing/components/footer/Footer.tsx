"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const { user } = useUser();
  const handelsumibt = () => {
    if (!user) {
      router.push("/auth/sign-in/");
    } else router.push("/dashboard");
  };
  return (
    <div className="flex justify-center font-bold items-center w-full h-[50vh] text-center gap-4 flex-col">
      <h1 className="lg:text-5xl md:text-3xl text-2xl ">
        Let and Enjoy and learn with the <br /> powered of the ai..
      </h1>
      <p className="text-sm text-gray-600">
        Just sign in and learn in the different way from the ai ..
      </p>

      <Button size={"lg"} onClick={handelsumibt}>
        Let Start it
      </Button>
    </div>
  );
};

export default Footer;
