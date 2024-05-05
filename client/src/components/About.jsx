import React from "react";
import sergio from "../assets/sergio.png";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="sm:py-16">
        <div className="mt-4 md:mt-0 text-center flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-base lg:text-xl mt-5">
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
            <p className="text-base lg:text-xl mt-5">
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
          <h1 className="text-4xl mx-auto font-bold mb-4 mt-10">Founders</h1>
          <div className="flex flex-row justify-around mt-16">
            <div>
              <img src={sergio} alt="" width={300} height={300} />
              <p className="text-2xl mt-5">Sergio Ardila-Alvarado</p>
              <div className="flex flex-row justify-center mt-7">
                <a href="" className="mx-auto">
                  <MdWork className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaLinkedin className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaGithub className="text-4xl" />
                </a>
              </div>
            </div>
            <div>
              <img src={sergio} alt="" width={300} height={300} />
              <p className="text-2xl mt-5">Megan Schneider</p>
              <div className="flex flex-row justify-center mt-7">
                <a href="" className="mx-auto">
                  <MdWork className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaLinkedin className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaGithub className="text-4xl" />
                </a>
              </div>
            </div>
            <div>
              <img src={sergio} alt="" width={300} height={300} />
              <p className="text-2xl mt-5">Travis Umbel</p>
              <div className="flex flex-row justify-center mt-7">
                <a href="" className="mx-auto">
                  <MdWork className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaLinkedin className="text-4xl" />
                </a>
                <a href="" className="mx-auto">
                  <FaGithub className="text-4xl" />
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
