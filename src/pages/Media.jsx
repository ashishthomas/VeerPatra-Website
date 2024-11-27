import React from "react";
import LetterCard from "../Reusable Components/LetterCard";
import { letters } from "../utils/constants";

const Media = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-4xl mt-6 mb-6">
        Media Gallery
      </h1>
      <div className="flex justify-center flex-wrap gap-10">
        {letters.map((letter) => (
          <LetterCard key={letter.imageId} letterData={letter} />
        ))}
      </div>
    </div>
  );
};

export default Media;
