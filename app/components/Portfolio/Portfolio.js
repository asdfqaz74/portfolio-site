import PortfolioSection from "./PortfolioSection";

export default function Portfolio() {
  return (
    <div className="flex flex-col px-40" id="portfolio">
      <span className="text-center text-4xl my-40 font-bold">Portfolio</span>
      <div className="grid grid-cols-2 gap-10 mb-40">
        <PortfolioSection
          thumbnail={"euid"}
          title={"엔터이듬"}
          date={"24.01.04 - 24.01.16"}
          techs={["JavaScript", "TailwindCSS", "PocketBase", "Vercel", "Vite"]}
          github1={"https://github.com/asdfqaz74/popcorn-euid"}
        />
        <PortfolioSection
          thumbnail={"healthyp"}
          title={"HealthyP"}
          date={"24.02.19 - 24.03.13"}
          techs={[
            "TypeScript",
            "React-Query",
            "Jotai",
            "TailwindCSS",
            "PocketBase",
            "Vercel",
          ]}
          github1={"https://github.com/FRONTENDSCHOOL8/HealthyP"}
        />
        <PortfolioSection
          thumbnail={"naram"}
          title={"나람 리뉴얼"}
          date={"24.05.01"}
          techs={[
            "TypeScript",
            "Jotai",
            "Styled-Components",
            "Netlify",
            "Storybook",
          ]}
          link={"http://www.naram.kr/?act=main"}
          github1={"https://github.com/asdfqaz74/naramRemodeling"}
        />
        <PortfolioSection
          thumbnail={"team-maker"}
          title={"팀 메이커"}
          date={"24.10.22"}
          techs={[
            "JavaScript",
            "React-query",
            "Jotai",
            "Node.js",
            "MongoDB",
            "Netlify",
            "Express",
            "Mongoose",
            "TailwindCSS",
          ]}
          link={"https://team-maker.me/"}
          github1={"https://github.com/asdfqaz74/lolbanhelper-fe"}
          github2={"https://github.com/asdfqaz74/lolbanhelper-be"}
          desc1={"프론트엔드 깃허브 바로가기"}
          desc2={"백엔드 깃허브 바로가기"}
        />
      </div>
    </div>
  );
}
