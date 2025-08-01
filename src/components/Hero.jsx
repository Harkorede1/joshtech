/**
 * @copyright 2024 Joshie'sTech
 * @license Apache-2.0
 **/

/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-xl">
              <img
                src="./images/Avatar.png"
                width={40}
                height={40}
                alt="Joshua portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-gray-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-green-500">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            I bring ideas to life through scalable, modern web solutions.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href={"./images/Resume1.pdf"}
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-red-400 via-25% via-red-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="./images/MyPicturePortfolio.webp"
              width={656}
              height={800}
              alt="Joshua Image"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Hero;
