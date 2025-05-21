"use client";

import Image from "next/image";
import { useState } from "react";

export default function PortfolioSection({
  thumbnail,
  title,
  date,
  techs = [],
  link,
  github1,
  desc1,
  github2,
  desc2,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[25rem] h-[25rem] perspective">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setFlipped(!flipped)}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-2xl">
            <Image
              src={`/${thumbnail}.png`}
              alt="Portfolio Thumbnail"
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-start gap-3 p-6 bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer overflow-y-auto">
            <span className="text-xl font-bold mb-2">사용 기술</span>
            <ul className="list-disc text-sm text-left">
              {techs.map((t, i) => (
                <li
                  key={i}
                  className={`my-2 ${
                    t === "Frontend"
                      ? "text-amber-400 font-semibold"
                      : t === "Backend"
                      ? "text-emerald-400 font-semibold"
                      : t === "Etc"
                      ? "text-sky-400 font-semibold"
                      : ""
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-amber-300 hover:font-bold hover:scale-105 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  사이트 바로가기
                </a>
              )}
              {github1 && (
                <div className="group relative">
                  <a
                    href={github1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Image
                      src={"/github.svg"}
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="inline-block mr-2 group-hover:scale-150 transition-transform duration-300"
                    />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {desc1 || "깃허브 바로가기"}
                  </span>
                </div>
              )}
              {github2 && (
                <div className="group relative">
                  <a
                    href={github2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Image
                      src={"/github.svg"}
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="inline-block mr-2 group-hover:scale-150 transition-transform duration-300"
                    />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {desc2 || "깃허브 바로가기"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold mt-2">{title}</span>
        <span className="text-lg">{date}</span>
      </div>
    </div>
  );
}
