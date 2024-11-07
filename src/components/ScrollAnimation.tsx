import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <div className=" h-screen flex items-center justify-center">
      <motion.div 
      style={{ scale, opacity }}
      className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg">
      </motion.div>
        <div className="w-full h-[200vh]"></div>
    </div>
  );
};

export default ScrollAnimation;
