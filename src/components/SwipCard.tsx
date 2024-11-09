import { motion } from "framer-motion";
import { useState } from "react";

const SwipCard = () => {
    const [isRemoved, setIsRemoved] = useState(false)
    const handleSwipe = (_:any,info:any)=>{
        if(info.offset.x> 100){
            setIsRemoved(true);
        }else if(info.offset.x< -100){
            setIsRemoved(true);
        }
    }
  return (
    <motion.div className={` w-64 h-32 bg-red-200 rounded-lg shoadow-lg flex items-center justify-center
    test-white ${isRemoved ? "hidden" : ""}`}
    drag='x'
    dragConstraints={{left: -100,right: 100,}}
    onDragEnd={handleSwipe}
    >
        Swiper!!!
    </motion.div>
  )
}

export default SwipCard