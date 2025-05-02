import React from "react";
import LetterCard from "../Reusable Components/LetterCard";
import { letters } from "../utils/constants";
import PageLayout from "../Components/PageLayout";

const Media = () => {
  return (
    <PageLayout>
      <h1 className="font-semibold text-center mt-[12vh] mb-6 text-2xl sm:text-3xl md:text-4xl">
        Media Gallery
      </h1>
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-10 px-4 sm:px-8 max-w-screen-xl mx-auto mb-[9vh]">
        {letters.map((letter) => (
          <LetterCard key={letter.imageId} letterData={letter} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Media;
