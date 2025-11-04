import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactInfo({ contactText }) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center"
    >
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {contactText.headingSmall}
      </Typography>

      <Typography variant="h4" className="font-bold text-gray-900 !mb-4">
        {contactText.headingLarge}
      </Typography>

      <Typography variant="body1" color="text.secondary" className="!mb-8">
        {contactText.description}
      </Typography>

      <Box className="space-y-4">
        <Typography className="flex items-center text-gray-700">
          <LocationCity className="text-blue-600 mr-3" />
          {contactText.address}
        </Typography>

        <Typography className="flex items-center text-gray-700">
          <Phone className="text-blue-600 mr-3" />
          {contactText.phone}
        </Typography>

        <Typography className="flex items-center text-gray-700">
          <Mail className="text-blue-600 mr-3" />
          {contactText.email}
        </Typography>
      </Box>
    </motion.div>
  );
}
