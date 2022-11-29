import React from "react";
import { FaGithub } from "react-icons/fa";
import Theme from "./Mode";
import Buttons from "./upload&download/Buttons";

export default function Header({imageRef}) {
  return (
    <div>
      <nav className="bg-white dark:bg-[#161b22]  shadow dark:shadow-gray-500">
        <div className="sm:max-w-7xl mx-auto px-2 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between  flex items-center">
              <a className="flex-shrink-0" href="https://github.com/pscode22">
                <FaGithub size={40} className="dark:text-white" />
              </a>
              <div className="border-0">
                <div className="sm:ml-10 ml-2 flex gap-1 md:gap-10 space-x-4 place-items-center">
                  <Buttons
                    btnClass={` bg-pink-500 h-12 text-white active:bg-pink-600 font-bold uppercase text-sm  px-2 sm:px-6 py-3 rounded 
                    shadow hover:shadow-lg outline-none  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-1 h-full mt-1`}
                    imageRef={imageRef}
                  />
                </div>
              </div>

              <div>
                <Theme />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
