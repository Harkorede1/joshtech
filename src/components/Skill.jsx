/**
 * @copyright 2024 Joshie'sTech
 * @license Apache-2.0
 **/

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "./images/html5.svg",
    label: "HTML5",
    desc: "Structure",
  },
  {
    imgSrc: "./images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "./images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "./images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "./images/UI-UX.png",
    label: "UI/UX Design",
    desc: "Design tool",
  },
  {
    imgSrc: "./images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "./images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "./images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-gray-400 mt-3 mb-8 max-w-[50ch]">
          Explore the tools and technologies I use to craft seamless,
          high-performance web experiences — from design to deployment.
        </p>

        <div className="grid gap-3 grid-cols-[repeat (auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skill;
