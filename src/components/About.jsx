/**
 * @copyright 2024 Joshie'sTech
 * @license Apache-2.0
 **/

import { number } from "prop-types";

const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 5,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-gray-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-gray-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Joshua, a professional web developer with a
            passion for creating beautiful and functional websites. I combine
            technical skills with a keen eye for design to deliver exceptional
            user experiences. I’ve worked with a range of modern web
            technologies and frameworks to help businesses build a strong online
            presence and achieve their digital goals.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-red-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="">{label}</p>
              </div>
            ))}

            <img
              src="./images/Joshies_sTech_White_Logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40p x]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
