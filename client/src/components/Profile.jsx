import React from "react";

const Profile = ({ nutritionalData }) => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="profile">
      <div className="sm:py-16">
        <div className="mt-4 md:mt-0 text-center flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-16 dark:text-gray-600">
              Welcome, User
            </h2>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-center mb-10 font-bold text-4xl dark:text-gray-600">
            Nutricion Tracker
          </h1>
          <div
            id="day1"
            className="backdrop-filter dark:bg-gray-500 p-4 mx-auto border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3 id="card-name" className="text-3xl mb-10 text-center">
              Total Chart
            </h3>
            {/* Display fetched nutritional data here */}
            {nutritionalData && (
              <>
                <h3 id="card-date" className="text-3xl mb-10 text-center ">
                  {nutritionalData.date}
                </h3>
                <p id="card-calories" className="text-2xl ">
                  Total Calories: {nutritionalData.calories}
                </p>
                <p id="card-sugar" className="text-2xl ">
                  Total Sugar: {nutritionalData.sugar}
                </p>
                <p id="card-sodium" className="text-2xl ">
                  Total Sodium: {nutritionalData.sodium}
                </p>
                <p id="card-protein" className="text-2xl ">
                  Total Protein: {nutritionalData.protein}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
