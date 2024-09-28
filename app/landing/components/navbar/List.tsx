import Link from "next/link";
import React from "react";

const List = () => {
  const nav = [
    {
      id: 1,
      name: "Home",
      ref: "/",
    },
    {
      id: 2,
      name: "About us",
      ref: "/",
    },
    {
      id: 5,
      name: "Community",
      ref: "/",
    },

    {
      id: 3,
      name: "Explore",
      ref: "/",
    },

    {
      id: 4,
      name: "Pricing",
      ref: "/",
    },
  ];
  return (
    <div className="hidden ml-6  lg:flex text-gray-600">
      {nav.map((navitem) => (
        <span key={navitem.id}>
          <Link href={navitem.ref} className="items-center gap-3 flex-row">
            <div className="mx-2 flex items-center">{navitem.name}</div>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default List;
