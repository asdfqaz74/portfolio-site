"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 pb-72">
      <h2 className="text-4xl">
        안녕하세요. FrontEnd 개발자를 꿈꾸는 강진성 입니다.
      </h2>
      <div className="flex gap-1 text-2xl">
        <span>저는</span>
        <TypeAnimation
          sequence={[
            "기술 학습의 즐거움",
            2000,
            "협업과 소통",
            2000,
            "변화와 도전",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
          className="text-yellow-300"
        />
        <span>을 중요시 합니다</span>
      </div>
    </div>
  );
}
