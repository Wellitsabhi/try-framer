import {
    motion,
   
  } from "framer-motion";
const Assignment1Box = () => {
  return (
    <motion.div className="bg-blue-100 w-20 h-20" 
    initial={{x: -100}}
    animate={{x: 100}}
    transition={{duration: 2}}
    />

        
  )
}

export default Assignment1Box