import React, { Fragment } from "react";
import Card from "@/components/ui/Card";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import Overview from "./Overview";
import Examlisting from "./Examlisting";
const buttons = [
  {
    title: "General Update",
    icon: "heroicons-outline:home",
  },
  {
    title: "Overview",
    icon: "heroicons-outline:user",
  },
];

function AddExam() {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-7">
      <Card>
        <h4
          className="card-title mb-14"
          style={{
            fontFamily: "Open Sans sans-serif",
            fontSize: "34px",
            fontWeight: "600",
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          Exam Details
        </h4>
        <Tab.Group>
          <Tab.List className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
            {buttons.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` text-sm font-medium mb-7 capitalize bg-white
             dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2
              transition duration-150 before:transition-all before:duration-150 relative 
              before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-success-500 
              before:-translate-x-1/2 
              
              ${
                selected
                  ? "text-success-500 before:w-full"
                  : "text-slate-500 before:w-0 dark:text-slate-300"
              }
              `}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Examlisting />
            </Tab.Panel>
            <Tab.Panel>
              <Overview />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
    </div>
  );
}

export default AddExam;
