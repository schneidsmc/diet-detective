import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="lg:mt-10 text-center">
      <div className="max-w-[1200px] sm:h-[150px] p-12 sm:flex justify-between mx-auto items-center inline-block text-center">
        <span className="text-white dark:text-gray-600">
          Diet<span className="text-gray-400">Detective</span>
        </span>
        <div className="text-5xl flex sm:flex-row justify-center md:gap-16 py-3 text-gray-600 dark:text-white mt-3 md:mt-0">
          <a
            href="https://www.instagram.com/sthiwar_17/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-ardila-alvarado-550b40152/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
          </a>
          <a
            href="https://github.com/Stroyer210"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
          </a>
          <a
            href="https://github.com/Stroyer210"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
          </a>
        </div>
        <p className="text-gray-600 mt-3 md:mt-0">
          ©2024 DietDetective <br /> All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
