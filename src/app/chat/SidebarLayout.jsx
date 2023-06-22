import React from "react";
import LogoComponent from "./logoComponent";
import SidebarList from "./SidebarList";
import Image from "next/image";
const SidebarLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-5">
      {/* Sidebar */}
      <div className="col-span-1 h-screen relative">
        <div className="flex justify-center items-center">
          <div className="w-3/4 pt-9">
            {/* inner content */}
            <div className="w-2/3">
            <LogoComponent/>
            </div>
            <SidebarList />

            <footer className="flex justify-center items-center absolute bottom-12 text-white left-0 right-0 min-w-min">
              <div className="bg-[#282C34] rounded-lg h-32 px-8 border-solid border-b border-t border-r border-l border-[#494949]">
                <div className="flex justify-center items-center pt-5">
                  <Image width={41} height={41} src="/avatar.png" alt="avatar" />
                  <div className="pl-3">
                    <h1 className="text-sm">Кирилл Чирясов</h1>
                    <h2 className="text-xs text-gray-500">lorem@ipsum.com</h2>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-3">
                <button className="px-10 py-2 rounded-lg text-sm font-light border-solid border-b border-t border-r border-l border-[#494949]">Копирайтер</button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="col-span-4">{children}</div>
    </div>
  );
};

export default SidebarLayout;
