import React from "react";
import sergio from "../assets/sergio.png";
import megan from "../assets/megan.png";
import travis from "../assets/travis.png";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiWorldhealthorganization } from "react-icons/si";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHealthCapsule } from "react-icons/gi";
import { RiHealthBookLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="sm:py-16">
        <div className="mt-4 md:mt-0 text-center flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 dark:text-gray-600">
              About Us
            </h2>
            <div className="grid grid-cols-2 md:flex md:flex-row md:justify-around mt-2 md:my-10">
              <SiWorldhealthorganization className="text-5xl border-2 mx-auto rounded size-32 p-3 dark:text-gray-600 dark:hover:text-gray-900 hover:text-yellow-200" />
              <MdOutlineWorkspacePremium className="text-5xl border-2 mx-auto rounded size-32 p-3 dark:text-gray-600 dark:hover:text-gray-900 hover:text-blue-200" />
              <IoFastFoodOutline className="text-5xl border-2 rounded mx-auto size-32 p-3 dark:text-gray-600 dark:hover:text-gray-900 hover:text-red-200" />
              <GiHealthCapsule className="text-5xl border-2 rounded mx-auto size-32 p-3 dark:text-gray-600 dark:hover:text-gray-900 hover:text-green-200" />
              <RiHealthBookLine className="invisible md:visible mx-auto md:text-5xl border-2 md:size-32 rounded p-3 dark:text-gray-600 dark:hover:text-gray-900 hover:text-orange-200" />
            </div>
            <p className="text-base lg:text-xl md:mt-5 dark:text-gray-600">
              Our vision at DietDetective is to revolutionize the way people
              approach nutrition by providing a comprehensive, user-friendly,
              and personalized platform for tracking and managing dietary
              habits. We envision a world where everyone has the tools and
              knowledge they need to make informed decisions about their food
              choices, leading to improved health and well-being. With our app,
              we aim to empower individuals to take control of their nutrition
              journey, discover the impact of their dietary habits, and achieve
              their wellness goals with confidence and ease.
            </p>
            <p className="text-base lg:text-xl mt-5 dark:text-gray-600">
              Diet Detective was designed to be your personalized nutritional
              companion, offering a tailored experience that considers your
              unique profile, including factors like weight, height, sex, and
              age. Our team has poured their heart and soul into crafting a
              solution that goes beyond generic tracking. By leveraging these
              individual metrics, the app provides precise insights into the
              nutritional vitamins present in each meal, ensuring that you're
              equipped with the information you need to make informed dietary
              choices.
            </p>
          </div>
        </div>
        <div className="mt-4  md:mt-0 text-center ">
          <h1 className="text-4xl mx-auto font-bold mb-4 mt-10 dark:text-gray-600">
            Founders
          </h1>
          <div className="md:flex md:flex-row  justify-around mt-16">
            <div className="text-center mb-16 md:mb-0">
              <img
                src={sergio}
                alt=""
                width={300}
                height={300}
                className="contact-shadow mx-auto"
              />
              <p className="text-2xl mt-5 dark:text-gray-600">
                Sergio Ardila-Alvarado
              </p>
              <div className="flex flex-row justify-center mt-7">
                <a
                  href="https://sergio-ardila-portfolio.netlify.app/"
                  className="mx-auto"
                  target="_blank"
                >
                  <MdWork className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sergio-ardila-alvarado-550b40152/"
                  className="mx-auto"
                  target="_blank"
                >
                  <FaLinkedin className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://github.com/Stroyer210"
                  className="mx-auto"
                  target="_blank"
                >
                  <FaGithub className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
              </div>
            </div>
            <div className="mb-16 md:mb-0">
              <img
                src={megan}
                alt=""
                width={300}
                height={300}
                className="contact-shadow mx-auto"
              />
              <p className="text-2xl mt-5 dark:text-gray-600">
                Megan Schneider
              </p>
              <div className="flex flex-row justify-center mt-7">
                <a
                  href="https://meganschneider.netlify.app/"
                  className="mx-auto"
                  target="_blank"
                >
                  <MdWork className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://www.linkedin.com/in/meganschneider215/"
                  target="_blank"
                  className="mx-auto"
                >
                  <FaLinkedin className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://github.com/schneidsmc"
                  className="mx-auto"
                  target="_blank"
                >
                  <FaGithub className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
              </div>
            </div>
            <div className="mb-16 md:mb-0">
              <img
                src={travis}
                alt=""
                width={300}
                height={300}
                className="contact-shadow mx-auto"
              />
              <p className="text-2xl mt-5 dark:text-gray-600">Travis Umbel</p>
              <div className="flex flex-row justify-center mt-7">
                <a
                  href="https://main--thriving-beignet-29c745.netlify.app/"
                  className="mx-auto"
                  target="_blank"
                >
                  <MdWork className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://www.linkedin.com/in/travis-umbel-1368652b1/"
                  className="mx-auto"
                  target="_blank"
                >
                  <FaLinkedin className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
                <a
                  href="https://github.com/Umbelth94"
                  className="mx-auto"
                  target="_blank"
                >
                  <FaGithub className="text-4xl contact-shadow dark:text-gray-600 dark:hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
