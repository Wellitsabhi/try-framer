import {motion} from "framer-motion";
const App = () => {
  return <div>
    <motion.div 
    className="box " 
    drag 
    dragConstraints = {{top: -50, left: -50, bottom: 50, right: 50}}
    whileDrag={{scale: 0.7,
      // backgroundColor: "whitesmoke"
    }}
    transition={{ type: "spring", stiffness: 100}}

    />

    </div>
  
};

export default App;
