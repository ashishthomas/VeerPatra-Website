import React from "react";
import LetterCard from "../Reusable Components/LetterCard";
import { letters } from "../utils/constants";
import { Box } from "@mui/material";

const Gallery = () => {
  return (
    <Box className="w-[87%] rounded-2xl bg-slate-100 py-10 px-4 border sx-ps-10 pt-1 sx-pe-10 pb-10 m-auto mt-[10vh]">
      <h1 className="font-semibold text-center text-4xl mt-[3vh] mb-6">
        Gallery
      </h1>
      <div className="flex justify-center flex-wrap gap-10 sx-gap-5">
        {letters.slice(0, 4).map((letter) => (
          <LetterCard key={letter.imageId} letterData={letter} />
        ))}
      </div>
    </Box>
  );
};

export default Gallery;
