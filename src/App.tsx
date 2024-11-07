import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import StaggerAnimation from "./components/StaggerAnimation";
const App = () => {
  const x =useMotionValue(200);
  useMotionValueEvent(x, 'animationStart', ()=>{
    console.log('animationStarted on x');
  })

  useMotionValueEvent(x, 'change', (latest)=>{
    console.log('x change to ', latest);
  })


  return (
    <motion.div className="box" drag dragConstraints={{left: 0, right: 200, }} style={{x}}>
    </motion.div>
  );
};

export default App;
