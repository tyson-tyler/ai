"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import React from "react";

const Mick = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  const handlesubmit = () => {
    if (!user) {
      router.push("/auth/sign-in/");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <Button variant={"ghost"}>Contact</Button>
      <Button onClick={handlesubmit}>Start Now</Button>
    </div>
  );
};

export default Mick;
