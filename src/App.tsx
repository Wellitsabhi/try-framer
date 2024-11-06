import {motion} from "framer-motion";
const App = () => {
  return <div>
    <motion.div 
    className="box"
    whileHover={{scale: 1.2,
      rotate: 10
    }}
    transition={{ type: "spring", stiffness: 1000}}

    />

    </div>
  
};

export default App;
