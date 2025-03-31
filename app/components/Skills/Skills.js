import Graph from "./Graph";

export default function Skills() {
  const languageData = [
    { skill: "JavaScript", value: 90, icon: "javascript" },
    { skill: "TypeScript", value: 60, icon: "typescript" },
  ];

  const frontEndData = [
    { skill: "React", value: 80, icon: "react" },
    { skill: "Next", value: 40, icon: "next2" },
    { skill: "Jotai", value: 60, icon: "jotai" },
    { skill: "React-query", value: 40, icon: "reactquery" },
    { skill: "Styled-Component", value: 60, icon: "styledcomponent" },
    { skill: "TailwindCSS", value: 100, icon: "tailwind" },
    { skill: "Storybook", value: 60, icon: "storybook" },
    { skill: "Node", value: 40, icon: "node" },
  ];

  const dbData = ["MongoDB"];

  const devOpsTools = ["Vercel", "Netlify"];

  return (
    <section
      id="skills"
      className="flex flex-col items-center py-20 gap-10 scroll-mt-1"
    >
      <h2 className="text-4xl font-bold mb-10">Stack Skills</h2>
      <Graph title="Language" data={languageData} />
      <Graph title="Front-End" data={frontEndData} />
      <div className="flex gap-20">
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2">Database</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {dbData.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2">DevOps</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {devOpsTools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
