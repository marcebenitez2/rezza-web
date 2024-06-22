"use client";
import { motion } from "framer-motion";

export const FramerComponent = ({
  children,
  style,
  animationInitial,
  animationAnimate,
  animationTransition,
  animationWhileInView,
  animationViewPort,
  animationVariants,
}: {
  children: React.ReactNode;
  style?: string;
  animationInitial?: Record<string, any>;
  animationAnimate?: Record<string, any>;
  animationTransition?: Record<string, any>;
  animationWhileInView?: Record<string, any>;
  animationViewPort?: Record<string, any>;
  animationVariants?: Record<string, any>;
}) => {
  return (
    <motion.div
      className={style}
      initial={animationInitial}
      animate={animationAnimate}
      transition={animationTransition}
      whileInView={animationWhileInView}
      viewport={animationViewPort}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};
