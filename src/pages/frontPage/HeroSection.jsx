import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import FrontPoster from "../../assets/FrontPagePoster.jpg"

export const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="relative pt-25 pb-20 lg:pt-38 lg:pb-33 overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div ref={textRef}>
            <h1 className="text-5xl lato-black md:text-7xl font-black tracking-tight leading-[0.9] text-textPrimary">
              CRAFTING <br />
              <span className="text-textSecondary">DIGITAL</span>{" "}
              <br />
              EXCELLENCE.
            </h1>

            <p className="lato-regular mt-8 text-xl max-w-lg leading-relaxed text-textPrimary">
              We are a creative studio specializing in building bold brands and
              high-performance digital products for the next generation of
              industry leaders.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full font-bold group
                  bg-black
                  text-white
                  border border-borderPrimary
                "
                href="#work"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full font-bold
                  border border-borderPrimary
                  text-textPrimary
                  hover:bg-secondary
                  transition-colors
                "
                href="#services"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div ref={imageRef} className="relative">
            <div className="aspect-8/7 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={FrontPoster}
                alt="Modern Workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-pulse" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
