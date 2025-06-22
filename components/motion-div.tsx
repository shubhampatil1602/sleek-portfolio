"use client";

import { motion } from "motion/react";

export const MotionDiv = (props: React.ComponentProps<typeof motion.div>) => {
  return <motion.div {...props} />;
};
