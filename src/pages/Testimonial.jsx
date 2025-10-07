import { Box, Container, Typography } from "@mui/material";
import TestimonialCard from "../Reusable Components/TestimonialCard";
import testimonialsData from "../Constants/testimonialsData";

function Testimonial() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center mt-2">
      <Box className="w-[87%] rounded-2xl bg-slate-100 py-10 px-4">
        {/* Header Section */}
        <Container className="mb-8 text-center">
          <Typography
            className="text-black text-lg sm:text-xl md:text-2xl font-bold"
            variant="h5"
          >
            Testimonials
          </Typography>
          <Typography
            className="text-gray-600 text-sm sm:text-base md:text-lg"
            variant="h6"
          >
            What our users say about us...
          </Typography>
        </Container>

        {/* Testimonial Cards Section */}
        <Container className="flex flex-wrap justify-center gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Container>
      </Box>
    </div>
  );
}

export default Testimonial;
