"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutPart from "./AboutPart";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0, y: 70 }}
      viewport={{ once: false, amount: 0.7 }}
      className="h-full px-auto flex flex-col gap-20 items-center justify-center mt-20 mb-70 scroll-mt-40"
      id="about"
    >
      <Image
        src="/picture.jpg"
        alt="profile"
        width={200}
        height={200}
        className="rounded-full"
      />
      <span className="text-4xl">About Me</span>
      <div className="flex flex-col gap-20 items-center">
        <div className="grid grid-cols-2 gap-30">
          <AboutPart category={"이름"} value={"강진성"} image={"user"} />
          <AboutPart
            category={"생년월일"}
            value={"96.03.28"}
            image={"birthday"}
          />
          <AboutPart
            category={"위치"}
            value={"경기도 의정부시"}
            image={"location"}
          />
          <AboutPart
            category={"학력"}
            value={"강원대학교 전자공학과"}
            image={"book"}
          />
        </div>
      </div>
    </motion.div>
  );
}
