"use client";

import { motion } from "framer-motion";
import AboutPart from "./AboutPart";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0, y: 70 }}
      viewport={{ once: false, amount: 1 }}
      className="h-full px-auto flex flex-col scroll-mt-90 items-center justify-center gap-20 mb-90"
      id="contact"
    >
      <span className="text-4xl">Contact</span>
      <div className="grid grid-cols-2 gap-30">
        <AboutPart
          category={"전화번호"}
          value={"010-3396-6467"}
          image={"telephone"}
        />
        <AboutPart
          category={"이메일"}
          value={"asdfqaz1996@naver.com"}
          image={"email"}
        />
      </div>
    </motion.div>
  );
}
