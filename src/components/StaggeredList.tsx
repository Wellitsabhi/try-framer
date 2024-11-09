import { motion, stagger } from "framer-motion";

const StaggeredList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    const listVariants ={
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

  return (
    <motion.ul
    variants={listVariants}
    initial = 'hidden'
    whileInView='visible'
    transition={{staggerChildren: 0.3}}

    className="flex flex-col items-center">
        {items.map((item,index)=>(
            <motion.li
            key={index}
            className="bg-blue-300 p4-4 text-white my-2 rounded-lg"
            initial = {{ opacity: 0, y: 20}}
            whileInView = {{ opacity: 1, y: 0}}
            transition={{duration: 0.5, }}
            >{item}</motion.li>
        ))}
    </motion.ul>
  )
}

export default StaggeredList