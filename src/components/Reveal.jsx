import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directionOffset = {
  up:    { y: 28, x: 0 },
  down:  { y: -28, x: 0 },
  left:  { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none:  { x: 0, y: 0 },
};

export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)", ...offset }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : {}
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
