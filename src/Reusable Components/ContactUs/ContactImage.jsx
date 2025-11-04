import { motion } from "framer-motion";

export default function ContactImage({ image }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full md:w-[55%] flex justify-center items-center bg-white"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-[85%] md:w-[80%] h-auto object-cover rounded-2xl shadow-xl mt-6"
      />
    </motion.div>
  );
}
