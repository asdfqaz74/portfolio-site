"use client";

export default function Education() {
  return (
    <div
      className="flex flex-col gap-20 pt-40 mb-50 scroll-mt-20"
      id="education"
    >
      <span className="text-4xl font-bold text-center">Education</span>

      {/* 강원대학교 */}
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto text-left">
        <span className="text-amber-300 font-semibold text-2xl">23.07</span>
        <span>강원대학교 전자정보통신공학부 전자공학과 졸업</span>
      </div>

      {/* 멋쟁이사자처럼 수료 */}
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto text-left">
        <span className="text-amber-300 font-semibold text-2xl">
          23.10 ~ 24.03 멋쟁이사자처럼 프론트엔드 스쿨 8기 수료
        </span>

        <ul className="list-disc pl-6 space-y-5">
          <li>
            <span className="font-semibold">HTML / CSS 및 JavaScript 학습</span>
            <ul className="list-[circle] pl-5 mt-1 space-y-1 text-sm text-gray-300">
              <li>Semantic 태그 및 접근성이 확보된 마크업 작성</li>
              <li>JavaScript 이론 학습을 통한 동작 원리 등</li>
              <li>Vanilla JavaScript 프로젝트 수행</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">React 학습</span>
            <ul className="list-[circle] pl-5 mt-1 space-y-1 text-sm text-gray-300">
              <li>Component 기반 페이지 설계 이론 학습</li>
              <li>React 프로젝트 수행</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
