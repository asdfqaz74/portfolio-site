"use client";

import { motion } from "framer-motion";
import AboutPart from "./AboutMe/AboutPart";

export default function Archive() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0, y: 70 }}
      viewport={{ once: false, amount: 1 }}
      className="h-full px-auto flex flex-col scroll-mt-70 items-center justify-center gap-20 mb-80"
      id="archive"
    >
      <span className="text-4xl font-bold">Archive</span>
      <div className="grid grid-cols-2 gap-30">
        <AboutPart
          image={"github"}
          link={"https://github.com/asdfqaz74?tab=repositories"}
          value={"깃허브"}
        />
        <AboutPart
          image={"velog"}
          link={"https://velog.io/@k_ddaddi/posts"}
          value={"벨로그"}
        />
      </div>
    </motion.div>
  );
}
