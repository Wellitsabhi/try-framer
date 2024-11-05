import { motion } from "framer-motion";
const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        initial={{
          // scale: 2,
          rotateY: 0,
          rotateX: 0,
          skew: 0,
        }}
        animate={{
          scale: [0.1, 0.3, 0.5, 0.7, 0.4, 0.3, 1],
          rotateY: [0, 110, 19, 50, 19],
          rotateX: [0, 30, 19, 150, 40, 19],
          skew: [50, 20, 100, 40, 400,  100, 30],
          borderRadius: [10, 20, 30, 20, 10]
        }}
        transition={{ duration: 6, delay: 0.9, ease: "easeInOut" }}
      />
    </div>
  );
};

export default App;
