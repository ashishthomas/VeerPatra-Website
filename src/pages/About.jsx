import React from "react";
import PageLayout from "../Components/PageLayout";
import aboutText from "../Constants/AboutText";

const About = () => {
  return (
    <PageLayout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-center mt-[12vh] mb-8 text-3xl sm:text-4xl">
          {aboutText.title}
        </h1>

        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          <div className="sm:w-full md:w-full lg:w-1/2 text-base sm:text-lg text-gray-700">
            <h2 className="font-semibold text-center md:text-left text-2xl sm:text-3xl mb-4 sm:mb-6">
              {aboutText.sectionTitle}
            </h2>
            <p className="mb-3 sm:mb-4 font-bold text-center md:text-left">
              {aboutText.subtitle}
            </p>

            {aboutText.paragraphs.map((text, index) => (
              <p key={index} className="mb-3 sm:mb-4">
                {text}
              </p>
            ))}
          </div>

          <div className="w-full md:w-full lg:w-1/2 m-5">
            <img
              src={aboutText.image.src}
              alt={aboutText.image.alt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
