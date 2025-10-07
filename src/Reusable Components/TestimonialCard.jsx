import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialCard({ name, image, feedback }) {
  return (
    <Card className="m-auto w-full xs:w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] p-4 bg-sky-400 flex flex-col items-center text-center rounded-lg shadow-md">
      <CardActionArea className="flex flex-col items-center">
        <IconButton>
          <FormatQuoteIcon />
        </IconButton>

        <CardContent className="mb-6">
          <Typography className="text-sm sm:text-base md:text-lg text-gray-800">
            {feedback}
          </Typography>
        </CardContent>

        <div className="flex w-20 h-20 items-center overflow-hidden rounded-full shadow-md m-auto mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <Typography className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default TestimonialCard;
