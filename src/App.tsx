import { motion } from "framer-motion";
// import BouncingLoader from "./components/BouncingLoader";
import { useState } from "react";
import {variants } from "./variants.ts";
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>

        <motion.div className="box" 
          variants={variants}
          initial ="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit ="exit"
          transition={{ duration:2}}
          onMouseEnter={() => setIsVisible(!isVisible)}
          onMouseLeave={() => setIsVisible(!isVisible)}
        ></motion.div>


      {/* <BouncingLoader /> */}
    </div>
  );
};

export default App;
