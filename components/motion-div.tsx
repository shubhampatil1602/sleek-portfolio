"use client";

import { AnimationProps, motion } from "framer-motion";

export const MotionDiv = (
  props: AnimationProps & { children?: React.ReactNode },
) => {
  return <motion.div {...props} />;
};
