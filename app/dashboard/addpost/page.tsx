"use client";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Lightbulb, Option } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [active, setActive] = useState(0);
  const step = [
    {
      id: 1,
      name: "Catergory",
      ico: <LayoutGrid />,
    },
    {
      id: 2,
      name: "Topic & Description",
      ico: <Lightbulb />,
    },
    {
      id: 3,
      name: "Option",
      ico: <Option />,
    },
  ];
  return (
    <div className=" flex flex-col justify-center mt-10 items-center">
      <h2 className="text-4xl text-black font-semibold">Create Course</h2>

      <div className="flex">
        {step.map((steps, index) => (
          <div className="flex gap-3 mt-3" key={steps.id}>
            <div className="flex flex-col justify-center mx-3  items-center">
              <div
                className={`bg-gray-400 text-white p-3 rounded-full flex justify-center ${
                  active >= index && "bg-purple-500"
                } items-center w-[50px]`}
              >
                {steps.ico}
              </div>
              <h2 className="hidden md:block md:text-[9px] font-bold mt-2">
                {steps.name}
              </h2>
            </div>
            {index != step?.length - 1 && (
              <div
                className={`h-1 w-[50px] md:w-[100px] rounded-md ${
                  active >= index && "bg-purple-500"
                }  bg-gray-400`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="px-10 md:px-20 lg:px-30"></div>

      <div className="gap-3 flex justify-around w-full  mt-10">
        <Button
          disabled={active == 0}
          onClick={() => {
            setActive(active - 1);
          }}
        >
          previous
        </Button>
        {active < 2 && (
          <Button
            onClick={() => {
              setActive(active + 1);
            }}
          >
            Next
          </Button>
        )}
        {active == 2 && (
          <Button
            onClick={() => {
              setActive(active + 1);
            }}
          >
            Generate course
          </Button>
        )}
      </div>
    </div>
  );
};

export default page;
