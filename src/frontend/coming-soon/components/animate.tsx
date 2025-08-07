"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Textwrapper({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut" },
        y: {
          duration: 0.8,
          ease: "easeOut",
          times: [0, 1],
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
