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
      <span className="text-2xl">아카이브 입니다</span>
      <div className="grid grid-cols-2 gap-30">
        <AboutPart
          category={"깃허브"}
          value={"깃허브로 이동"}
          image={"github"}
          link={"https://github.com/asdfqaz74?tab=repositories"}
        />
        <AboutPart
          category={"블로그"}
          value={"블로그로 이동"}
          image={"velog"}
          link={"https://velog.io/@k_ddaddi/posts"}
        />
      </div>
    </motion.div>
  );
}
