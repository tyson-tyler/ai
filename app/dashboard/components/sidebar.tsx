"use client";
import React from "react";
import { HomeIcon, Telescope, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname

const Sidebar = () => {
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
      ref: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Create",
      icon: Plus,
      ref: "/dashboard/create",
    },
    {
      id: 5,
      name: "Setting",
      icon: Settings,
      ref: "/dashboard/setting",
    },
  ];

  // Navigate to route on click
  const handleNavigation = (path: string) => {
    router.push(path); // Navigate programmatically
  };

  return (
    <div className="md:flex w-full flex-col gap-4 items-center h-[93vh] hidden  bg-white text-black">
      {navbar.map((navitem) => (
        <div
          key={navitem.id}
          onClick={() => handleNavigation(navitem.ref)}
          className={`flex justify-center items-center flex-col gap-1 px-2  py-[5px] rounded-md transition-all duration-300 cursor-pointer ${
            pathname === navitem.ref
              ? "bg-blue-500 text-white" // Active state styling
              : "hover:bg-gray-200 text-black"
          } hover:scale-105`} // Hover animation
        >
          <navitem.icon className="w-5 h-5" />
          <span className="flex text-center items-center text-[10px]">
            {navitem.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
