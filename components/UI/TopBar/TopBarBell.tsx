import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BellSVG } from "../../../assets/SideBarItemsSVG";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { sideBarItemsSelected } from "../../../atoms";
import moment from "moment";

const items = [
  { name: "Water", message: "It's time to pay.", image: "drop" },
  {
    name: "Electricity",
    message: "1 more day before shut down !",
    image: "lightning",
  },
  {
    name: "Households",
    message: "John just added a list of items.",
    image: "household",
  },
  {
    name: "Savings",
    message: "Savings is growing bigger !",
    image: "piggy-bank",
  },
];

export default function TopBarBell() {
  const [sideBarItemSelected, setSideBarItemSelected] =
    useRecoilState(sideBarItemsSelected);

  return (
    <div className="laptop:w-56 laptop:fixed laptop:mr-10 z-50 col-start-4 mr-10">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium">
            <div>{BellSVG}</div>
            <span className="w-2 h-2 rounded-full dark:text-headline_dark bg-alert dark:bg-btn_dark"></span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-3 w-56 mt-3 origin-top-right bg-background dark:bg-background_dark rounded-md shadow-lg focus:outline-none">
            <div className="px-1 py-1">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-main dark:bg-btn_dark text-headline dark:text-headline_dark"
                          : ""
                      } group flex text-left flex-col rounded-md w-full text-lg dark:text-headline_dark p-4 border-2 my-3`}
                    >
                      {item.message}
                      <span className="dark:text-headline_dark text-xs italic">
                        {moment().startOf("minute").fromNow()}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
            <Link href="/notifications" passHref>
              <div
                className="bg-main dark:bg-btn_dark text-headline dark:text-headline_dark p-4 rounded-md text-center m-2 cursor-pointer"
                onClick={() => setSideBarItemSelected("Notifications")}
              >
                See all notifications
              </div>
            </Link>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
