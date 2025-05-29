/**
 * @copyright 2024 Joshie'sTech
 * @license Apache-2.0
 **/

/**
 * Node modules
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Joshua is a skilled web developer with a keen eye for detail and strong problem-solving abilities. His design talent and collaborative approach make him a top choice for website or app development. Highly recommended!",
    name: "Boma Bobmanuel",
    imgSrc: "./images/people1.png",
    company: "Software Engr",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Hon Samuel",
    imgSrc: "./images/people1.png",
    company: "NexaWave",
  },
  {
    content:
      "Joshua is a skilled web developer with a keen eye for detail and strong problem-solving abilities. His design talent and collaborative approach make him a top choice for website or app development. Highly recommended!",
    name: "Boma Bobmanuel",
    imgSrc: "./images/people1.png",
    company: "Software Engr",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Mr Victor",
    imgSrc: "./images/people1.png",
    company: "Computer Engr",
  },
  {
    content:
      "An outstanding web developer known for meticulous attention to detail and effective problem-solving. Their creativity and teamwork consistently deliver impressive website results. Strongly recommended!",
    name: "Hon Samuel",
    imgSrc: "./images/people1.png",
    company: "Bus Admin",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "./images/people1.png",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          See what people are saying...
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Review;
