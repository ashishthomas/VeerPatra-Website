import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialCard() {
  return (
    <>
    <Card className="m-auto w-full xs:w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] p-4 bg-sky-400 flex flex-col items-center text-center rounded-lg shadow-md">
  <CardActionArea className="flex flex-col items-center">
    {/* Icon */}
    <IconButton className="">
      <FormatQuoteIcon />
    </IconButton>

    {/* Card Content */}
    <CardContent className="mb-6">
      <Typography className="text-sm sm:text-base md:text-lg text-gray-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
        aliquid.
      </Typography>
    </CardContent>

    {/* Profile Image */}
    <div className="flex w-20 h-20 items-center overflow-hidden rounded-full shadow-md m-auto mb-4">
      <img
        src="https://cdn.pixabay.com/photo/2022/09/05/15/15/indian-flag-7434395_640.jpg"
        alt="Allan Collins"
        className="w-full h-full object-cover "
      />
    </div>

    {/* Name */}
    <Typography className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
      Sachin Tendulkar
    </Typography>
  </CardActionArea>
</Card>
    </>
  );
}

export default TestimonialCard;
