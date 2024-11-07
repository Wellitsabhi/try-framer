import { motion, stagger } from "framer-motion";

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childtVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVariant} 
    initial="hidden"
    animate='visible'
    >
      {[...Array(5)].map((_, index) => (
        <motion.div className="box mt-[2rem]" key={index}
            variants={childtVariant}

            ></motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
