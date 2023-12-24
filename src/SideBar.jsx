import React, { useState } from "react";
import classNames from "classnames";
import profile from "../src/assets/customer2.svg";
import about from "../src/assets/about.svg";
import skills from "../src/assets/Skills.svg";
import qualifications from "../src/assets/qualifications.svg";
import contacts from "../src/assets/contacts.svg";
import projects from "../src/assets/react.svg";
import nightmode from "../src/assets/nightmode.svg";
import instagram from "../src/assets/instagram.svg";
import facebook from "../src/assets/facebook.svg";
import twitter from "../src/assets/twitter.svg";
import linkedin from "../src/assets/linkedin.svg";
import github from "../src/assets/github.svg";

const SideBar = () => {
  const list = ["About", "Skills", "Qualifications", "Contact", "Projects"];
  const links = [instagram, facebook, twitter, linkedin, github];
  const listIcons = [about, skills, qualifications, contacts, projects];
  const [isSelected, setIsSelected] = useState(false);

  const horizontalLine = <hr className=" w-72 mt-4 mb4- ml-12 bg-black" />;

  return (
    <>
      <section
        className={classNames(
          "h-screen shadow-sm w-1/4 border-r-pink-300 max-lg:hidden bg-purple-100 transition-all duration-300",
          { "dark:bg-black": isSelected }
        )}
      >
        <h1
          className={classNames(
            "text-center text-lg font-bold my-2 transition-all duration-300",
            { "text-white": isSelected }
          )}
        >
          Rushmore Simuunza
        </h1>
        <div className="flex justify-center">
          <img src={profile} className="w-32 h-32 m-2" alt="Profile" />
        </div>
        <p
          className={classNames(
            "text-center p-2 m-1 transition-all duration-300",
            { "text-white": isSelected }
          )}
        >
          lora laoren lo la lorens loyua loloda llora ralos losd se dmasd
          relod llosa lora la loraaor lorate letote loreer loreer reloler
          rere
        </p>
        <div className="flex justify-evenly w-full">
          {links.map((items, index) => (
            <img
              key={items}
              src={items}
              alt={`Social Icon ${index}`}
              className={classNames(
                "w-10 h-10 rounded-full hover:bg-pink-400 cursor-pointer transition-all duration-300",
                {
                  "bg-white dark:hover:bg-orange-500": isSelected,
                }
              )}
            />
          ))}
        </div>
        {horizontalLine}
        <div>
          <ul className="mx-24">
            {list.map((items, index) => (
              <li
                key={index}
                className={classNames(
                  "py-3 hover:text-pink-400 flex items-center hover:cursor-pointer transition-all duration-300",
                  {
                    "text-white dark:hover:text-orange-500": isSelected,
                  }
                )}
              >
                <img
                  src={listIcons[index]}
                  alt={`List Icon ${index}`}
                  className={classNames(
                    "w-6 h-6 mr-2 rounded-full",
                    { "dark:bg-white": isSelected }
                  )}
                />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="w-40 h-10 bg-pink-300 hover:bg-pink-400 rounded-md">
            Hire Me
          </button>
        </div>
        {horizontalLine}
        <div className="flex justify-center">
          <div className="flex justify-evenly w-22 h-6 m-2">
            <img
              src={nightmode}
              alt="Night Mode Icon"
              className={classNames("mx-2", { "dark:bg-white rounded-full": isSelected })}
            />
            <h1
              className={classNames(
                "text-black transition-all duration-300",
                { "dark:text-white": isSelected }
              )}
            >
              Dark Mode
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div
            onClick={() => setIsSelected(!isSelected)}
            className={classNames(
              "flex w-20 bg-gray-300 rounded-full transition-all duration-300 py-1",
              {
                "bg-green-500 justify-end ring-green-200 ring": isSelected,
              }
            )}
          >
            <span className="w-6 h-6 bg-gray-500 rounded-full transition-all duration-300 mx-1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
