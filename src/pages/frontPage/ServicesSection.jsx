import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Layout, Palette, Code, BarChart, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Social Media Marketing",
    description:
      "Managing social media pages by creating posts and reels, writing captions, engaging with followers, and optimizing profiles to grow reach and leads.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Code,
    title: "Website Services",
    description:
      "Designing, optimizing, and maintaining websites and landing pages with SEO, speed improvements, and contact form integration.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Creating a strong brand identity through logos, visual design, and consistent brand messaging.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: BarChart,
    title: "Paid Advertising",
    description:
      "Running data-driven ad campaigns to increase traffic, leads, and conversions across digital platforms.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Globe,
    title: "SEO Services",
    description:
      "Optimizing websites and content to improve search engine rankings and organic visibility.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Zap,
    title: "Growth Marketing",
    description:
      "Using creative strategies and analytics to rapidly grow your brand and online presence.",
    color: "bg-yellow-50 text-yellow-600",
  },
];

export function ServicesSection() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
    useEffect(() => {
    gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        }
    );

    gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
        }
    );
    }, []);

  return (
    <section id="services" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            ref={titleRef}
            className="text-4xl lato-bold text-textPrimary"
          >
            Services we provide to help your business grow
          </h2>

          <p className="mt-5 text-lg lato-regular text-textPrimary">
            We deliver result-focused digital marketing services to help brands
            grow online.
          </p>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className=" bg-Secondary p-10  rounded-3xl border border-textPrimary hover:bg-secondary "
              >
                <div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-textPrimary mb-4">
                  {service.title}
                </h3>

                <p className="text-textSecondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
