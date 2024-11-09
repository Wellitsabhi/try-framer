import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
    const {scrollYProgress} = useScroll();
    const lineWidth = useTransform(scrollYProgress, [0, 1] , ['0%', '100%']);


  return (
    <div className="h-[200vh] p-[20px]" >
      <motion.div className="fixed top-0 left-0 h-[8px] bg-red-300"
        style={{
            width: lineWidth,
            transition: 'width 0.1s ease'
     }}

      />
      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p className="mt-[20px]" key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            provident assumenda fugiat dicta unde explicabo earum sed eius
            aliquam, ea nulla culpa optio dolorem alias, reiciendis voluptatum
            non iste modi, velit temporibus labore. Maxime incidunt odio,
            tenetur ipsam et repudiandae unde a porro animi! Fugiat cumque
            recusandae in aperiam molestiae.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
