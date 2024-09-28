"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Book } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-center items-center flex-col  gap-2">
      <h1 className="text-2xl md:text-4xl lg:text-5xl mt-7 font-bold text-gray-700">
        Hello {user?.username} what do want to learn
      </h1>
      <Link href={"/dashboard/addpost"}>
        <Button size={"lg"}>
          <Book className="w-5 h-5 mr-4" />
          Start Now
        </Button>
      </Link>
    </div>
  );
};

export default page;
