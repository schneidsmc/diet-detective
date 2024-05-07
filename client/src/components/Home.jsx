import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo1.avif";
import photo2 from "../assets/photo2.avif";
import photo3 from "../assets/photo3.avif";
import photo4 from "../assets/photo4.avif";
import photo5 from "../assets/photo5.avif";
import photo6 from "../assets/photo6.avif";
import photo7 from "../assets/photo7.avif";
import photo8 from "../assets/photo8.avif";
import photo9 from "../assets/photo9.avif";
import { BiHealth } from "react-icons/bi";
import { GiHealthPotion } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealthIncrease } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[100vh] mx-auto pt-20">
        <div className="col-span-1 my-auto mx-auto w-[250px] lg:w-[400px] images mt-16">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img className="image" src={photo1} />
              </div>
              <div className="slide">
                <img className="image" src={photo2} />
              </div>
              <div className="slide">
                <img className="image" src={photo3} />
              </div>
              <div className="slide">
                <img className="image" src={photo4} />
              </div>
              <div className="slide">
                <img className="image" src={photo5} />
              </div>
              <div className="slide">
                <img className="image" src={photo6} />
              </div>
              <div className="slide">
                <img className="image" src={photo7} />
              </div>
              <div className="slide">
                <img className="image" src={photo8} />
              </div>
              <div className="slide">
                <img className="image" src={photo9} />
              </div>

              {/* double siles */}

              <div className="slide">
                <img className="image" src={photo1} />
              </div>
              <div className="slide">
                <img className="image" src={photo2} />
              </div>
              <div className="slide">
                <img className="image" src={photo3} />
              </div>
              <div className="slide">
                <img className="image" src={photo4} />
              </div>
              <div className="slide">
                <img className="image" src={photo5} />
              </div>
              <div className="slide">
                <img className="image" src={photo6} />
              </div>
              <div className="slide">
                <img className="image" src={photo7} />
              </div>
              <div className="slide">
                <img className="image" src={photo8} />
              </div>
              <div className="slide">
                <img className="image" src={photo9} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 pl-16">
          <h1 className="text-white dark:text-gray-700 text-4xl  sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-white dark:text-gray-700">
              Your <span className="underline">Path</span> To{" "}
              <span className="underline">Healthier</span> Living
            </span>{" "}
            <br />
            <br />
            <TypeAnimation
              sequence={[
                '"Eat Smart"',
                3000,
                '"Track Wise"',
                3000,
                '"Live Well!"',
                3000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>

          <div className="my-20 md:ml-40 lg:ml-72 text-center md:text-left ">
            <Link
              to="/Login"
              className="shadow-button dark:hover:bg-gray-800 font-bold px-6 pt-3 text-3xl pb-4 w-full rounded-xl mr-4 border border-gray-400 dark:bg-gray-600 dark:text-gray-300 text-gray-900 bg-white hover:text-black dark:hover:text-white hover:border-none"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto text-center mb-20 ">
        <h1 className="text-white text-center text-5xl font-bold dark:text-gray-600 dark:hover:text-gray-900">
          DEVELOP HEALTHY HABITS
        </h1>
        <p className="text-white dark:text-gray-600 text-center text-2xl mt-3">
          Developing healthy habits is not a one-time event but a lifelong
          journey, marked by small, consistent actions that add up to
          significant transformations over time. It's about rewiring our
          routines, reshaping our mindset, and reclaiming our vitality one step
          at a time.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="text-white text-center  ">
            <span>
              <GiHealthPotion className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-red-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">Start Small</h1>
            <p className="text-lg dark:text-gray-600">
              Begin by setting achievable goals. Small, incremental changes are
              more sustainable than attempting a complete overhaul of your
              lifestyle all at once. For example, start by adding an extra
              serving of vegetables to your meals or taking a short walk after
              dinner.
            </p>
          </div>
          <div className="text-white text-center">
            <span>
              <GiHealthIncrease className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-yellow-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">
              Consistency is Key
            </h1>
            <p className="text-lg dark:text-gray-600">
              Consistency is crucial when forming habits. Aim to incorporate
              healthy behaviors into your daily routine, whether it's
              exercising, meal prepping, or practicing mindfulness. Over time,
              these actions will become automatic and part of your lifestyle.
            </p>
          </div>
          <div className="text-white text-center">
            <span>
              <BiHealth className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-blue-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">
              Set SMART Goals
            </h1>
            <p className="text-lg dark:text-gray-600">
              Make your goals Specific, Measurable, Achievable, Relevant, and
              Time-bound (SMART). This framework helps you define clear
              objectives and track your progress effectively, keeping you
              motivated along the way.
            </p>
          </div>
          <div className="text-white text-center mt-10">
            <span>
              <TbHealthRecognition className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-green-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">
              Find What Works for You
            </h1>
            <p className="text-lg dark:text-gray-600">
              Explore different activities and approaches to health and wellness
              to discover what resonates with you. Whether it's yoga, running,
              cooking nutritious meals, or meditation, prioritize activities
              that bring you joy and align with your interests and values.
            </p>
          </div>
          <div className="text-white text-center mt-10">
            <span>
              <RiMentalHealthLine className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-orange-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">Mindful Eating</h1>
            <p className="text-lg dark:text-gray-600">
              Pay attention to your body's hunger and fullness cues. Practice
              mindful eating by savoring each bite, chewing slowly, and focusing
              on the sensory experience of your meals. This can help prevent
              overeating and foster a healthier relationship with food.
            </p>
          </div>
          <div className="text-white text-center mt-10">
            <span>
              <MdOutlineHealthAndSafety className="text-7xl mx-auto cursor-pointer dark:text-gray-600 dark:hover:text-gray-900 hover:text-indigo-200" />
            </span>
            <h1 className="text-3xl my-5 dark:text-gray-600">Stay Flexible</h1>
            <p className="text-lg dark:text-gray-600">
              Be adaptable and open to adjusting your habits as needed. Life is
              dynamic, and circumstances may change, so it's essential to remain
              flexible and responsive to new challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
