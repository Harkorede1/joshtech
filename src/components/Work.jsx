/**
 * @copyright 2024 Joshie'sTech
 * @license Apache-2.0
 **/

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/Project_1.png",
    title: "Portfolio website",
    tags: ["HTML", "CSS", "Development"],
    projectLink: "https://joshiestech.dev/",
  },
  {
    imgSrc: "./images/Project_2.png",
    title: "Portfolio Design",
    tags: ["HTML", "CSS", "DESIGN"],
    projectLink: "https://harkorede1.github.io/Portfolioweb/",
  },
  {
    imgSrc: "./images/Project_3.webp",
    title: "Food App Design",
    tags: ["UI", "UX", "DESIGN"],
    projectLink:
      "https://www.figma.com/design/zC2cZ750FK1CqZCNcFwW75/Food-app?node-id=13-362&t=ad8qRRnyVCgGmvfJ-1",
  },
  {
    imgSrc: "./images/Project_4.webp",
    title: "Insurance website",
    tags: ["Web-design", "Development"],
    projectLink:
      "https://www.figma.com/design/saEgyvw98gyeYYJM8Wkvag/Untitled?node-id=21-7&t=4WE0eTCabP5EQsZu-1",
  },
  {
    imgSrc: "./images/Project_5.webp",
    title: "BomjoPay INC.",
    tags: ["Fintech", "Development"],
    projectLink:
      "https://www.figma.com/design/Aj19Daq63Ip9p8yG4RjTpg/Untitled?node-id=25-21&t=JIeFSPXzFiOymGVW-1",
  },
  {
    imgSrc: "./images/Project_6.webp",
    title: "BomjoPay Web Design",
    tags: ["Design", "Development"],
    projectLink:
      "https://www.figma.com/design/M8jb5jX6TZIvWXH2bh7VpD/BomJo-Pay-Design?node-id=410-225&t=mS6tkpwr2cjnPMF1-1",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlight</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
