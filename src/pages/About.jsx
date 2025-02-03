import React from "react";
import PageLayout from "../Components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-center mt-[12vh] mb-8 text-3xl sm:text-4xl">
          About Us
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          <div className="sm:w-full md:w-full lg:w-1/2 text-base sm:text-lg text-gray-700">
            <h2 className="font-semibold text-center md:text-left text-2xl sm:text-3xl mb-4 sm:mb-6">
              Letters Of Compassion
            </h2>
            <p className="mb-3 sm:mb-4 font-bold text-center md:text-left">
              Dear Soldiers: Letters of Solitude and Gratitude
            </p>
            <p className="mb-3 sm:mb-4">
              In the quiet moments of our lives, when we reflect on freedom,
              safety, and peace, we often overlook the heroes who stand guard
              for us — our soldiers. Letters of Solitude is a heartfelt
              initiative to bridge this gap. Through our app, you can pen your
              thoughts, gratitude, and encouragement to the brave Indian
              soldiers who protect our nation, often far from their homes and
              loved ones.
            </p>
            <p className="mb-3 sm:mb-4">
              Your words have the power to bring warmth to their solitary posts,
              reminding them they are cherished, remembered, and deeply valued.
              A simple letter can be a beacon of hope on a long, cold night.
              Share your emotions, inspire courage, and let them know they are
              never alone in their sacrifice.
            </p>
            <p className="mb-3 sm:mb-4">
              Write today. Connect through humanity. Make a soldier smile.
            </p>
          </div>

          <div className="w-full md:w-full lg:w-1/2 m-5">
            <img
              // src="https://via.placeholder.com/600x400?text=Indian+Soldiers"
              src="https://img.freepik.com/premium-photo/group-soldiers-stand-backwards-front-india-flag-patriotism-military-procedure-flag-symbolism-symbolism-standing-attention-training-techniques_918839-12741.jpg"
              alt="A group of Indian soldiers standing together during a mission"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
