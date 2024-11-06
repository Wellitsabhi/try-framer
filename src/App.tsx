import {motion} from "framer-motion";
const App = () => {
  return <div>
    <motion.div 
    className="box"
    whileTap={{scale: 0.8,
      backgroundColor: "whitesmoke"
    }}
    transition={{ type: "inertia", stiffness: 1000}}

    />

    </div>
  
};

export default App;
