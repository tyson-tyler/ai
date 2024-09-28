"use client";
import { Button } from "@/components/ui/button";
import { CirclePlay, Github, Telescope } from "lucide-react";
import React from "react";
import Videoapp from "../hero/video";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Hero = () => {
  const router = useRouter();
  const { user } = useUser();
  const handelsumibt = () => {
    if (!user) {
      router.push("/auth/sign-in/");
    } else router.push("/dashboard");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-[100vh] lg:h-[100vh]">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
        Learn from Ai Course
      </h1>
      <p className="text-sm text-gray-500">
        Learn with ai generated cource use the Myaimix ...
      </p>

      <div className="flex justify-center gap-5 items-center">
        <Button className="flex gap-3  items-center ">
          <Github className="w-5 h-5" /> Github
        </Button>
        <Button
          className="flex gap-3 items-center bg-purple-500 hover:bg-purple-400 text-white "
          onClick={handelsumibt}
        >
          <CirclePlay className="w-5 h-5 flex" /> Start Now{" "}
        </Button>
      </div>
      <Videoapp />
    </div>
  );
};

export default Hero;
