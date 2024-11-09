import { motion } from "framer-motion";
import { useState } from "react";

const tooltipVariants  = {
    hidden: {opacity: 0, y:-120},
    visible: {opacity: 1, y: -110},

}

const Tooltop = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-2 bg-blue-500 text-white"
      >
        Hoooover me
      </button>
      {visible && <motion.div
        variants={tooltipVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{duration: 0.2}}
        className="absolute p-2 bg-gray-500 text-white rounded-md"
      >TOoltip content</motion.div>}
    </div>
  );
};

export default Tooltop;
