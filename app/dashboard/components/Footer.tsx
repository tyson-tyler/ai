"use client";
import React from "react";
import { HomeIcon, Telescope, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  const navbar = [
    {
      id: 1,
      name: "Home",
      icon: HomeIcon,
      ref: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: Telescope,
      ref: "/explore",
    },
    {
      id: 3,
      name: "Create",
      icon: Plus,
      ref: "/create",
    },
    {
      id: 5,
      name: "Setting",
      icon: Settings,
      ref: "/setting",
    },
  ];

  // Navigate to route on click
  const handleNavigation = (path: string) => {
    router.push(path); // Navigate programmatically
  };
  return (
    <div className="flex md:hidden fixed bottom-0 justify-center pt-2 pb-2  flex-row gap-4 items-center w-full   bg-gray-300 text-black">
      {navbar.map((navitem) => (
        <div
          key={navitem.id}
          onClick={() => handleNavigation(navitem.ref)}
          className={`flex justify-center items-center flex-col gap-1 px-2  p-2 rounded-md transition-all duration-300 cursor-pointer ${
            pathname === navitem.ref
              ? "bg-blue-500 text-white" // Active state styling
              : "hover:bg-gray-200 text-black"
          } hover:scale-105`} // Hover animation
        >
          <navitem.icon className="w-5 h-5" />
        </div>
      ))}
    </div>
  );
};

export default Footer;
