import React from "react";
import { Link } from "react-router-dom";
import { MoStrip } from "../frontPage/MoStrip";
import { ProcessSection } from "../frontPage/ProcessSection";
import { QuestionsSection } from "../frontPage/QuestionsSection";
import { InvitationSection } from "../frontPage/InvitationSection";

const serviceDetails = [
  {
    index: "01",
    title: "Websites & Development",
    tagline: "High-performance digital platforms built to convert",
    desc: "Custom, responsive websites designed and built for your business. We engineer lightning-fast digital experiences with clean architecture, fluid animations, and frictionless user flows.",
    deliverables: [
      "Custom UI/UX & Responsive Layouts",
      "Modern Frontend Architecture (React, Vite, Tailwind)",
      "Technical SEO & Core Web Vitals Optimization",
      "Interactive Components & Micro-interactions",
      "Automated Form Routing & Webhook Integrations",
      "Hosting, SSL & Custom Domain Setup",
    ],
    bgAccent: "hover:bg-[#F6FFA4]",
  },
  {
    index: "02",
    title: "Social Media Marketing",
    tagline: "Strategic storytelling and community growth",
    desc: "Full-service social media management designed to transform passive viewers into engaged advocates. From short-form video concepts to calendar management and profile optimization.",
    deliverables: [
      "Content Strategy & Visual Identity Grid",
      "Short-form Video Concepts (Reels & Shorts)",
      "High-engagement Copywriting & Captions",
      "Hashtag & Audience Research",
      "Performance Analytics & Monthly Reviews",
      "Community Management & Interaction",
    ],
    bgAccent: "hover:bg-[#F9B2D7]",
  },
  {
    index: "03",
    title: "Branding & Visual Identity",
    tagline: "Distinctive identities crafted for longevity",
    desc: "Memorable logo systems, cohesive color palettes, typography hierarchies, and brand guidelines that establish trust and differentiate your business across every medium.",
    deliverables: [
      "Primary, Secondary & Icon Logo Marks",
      "Curated Typography Systems & Pairings",
      "Color Palettes & Contrast Accessibility",
      "Comprehensive Brand Style Guide",
      "Vector Asset Suite (SVG, PNG, EPS)",
      "Print Collateral & Social Media Kits",
    ],
    bgAccent: "hover:bg-[#e1e4db]",
  },
  {
    index: "04",
    title: "Paid Advertising & SEO",
    tagline: "Data-driven customer acquisition",
    desc: "Precision-targeted campaigns on Meta and Google paired with technical on-page SEO to ensure high-intent customers find and choose your business when searching.",
    deliverables: [
      "Meta Ads (Instagram & Facebook) Setup & Management",
      "Google Search & Display Campaigns",
      "Conversion Tracking & Pixel / CAPI Integration",
      "On-page Keyword Optimization & Schema Markup",
      "A/B Creative & Headline Testing",
      "Transparent ROI & ROAS Reporting",
    ],
    bgAccent: "hover:bg-[#dce5f9]",
  },
  {
    index: "05",
    title: "Video Editing & Motion Graphics",
    tagline: "Cinema-grade visual storytelling",
    desc: "Dynamic, fast-paced video edits and custom motion graphics in Premiere Pro, DaVinci Resolve, and After Effects that hook attention within the first two seconds.",
    deliverables: [
      "Short-form Content Editing (Reels, TikTok, Shorts)",
      "Long-form YouTube & Brand Documentaries",
      "Custom Motion Graphics & Lower Thirds",
      "Sound Design, Audio Mastering & SFX",
      "Dynamic Subtitles & Kinetic Typography",
      "Color Correction & Grading",
    ],
    bgAccent: "hover:bg-[#dedcd2]",
  },
];

const Service = () => {
  return (
    <div className="bg-[#f5f3ec]">
      {/* Hero Header */}
      <section className="border-b border-[#141815] bg-[#F6FFA4] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a]">
            What we do · Capabilities &amp; Scope
          </span>
          <div className="grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
            <h1 className="text-[clamp(3.5rem,7.8vw,7.6rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
              OUR <br />
              <em>services.</em>
            </h1>
            <p className="max-w-md text-base leading-[1.5] text-[#59605a] md:mb-2">
              Websites, brand identities, digital media campaigns, and motion production tailored for ambitious businesses. We build digital infrastructure that drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-14">
          <div className="mb-14 flex flex-col justify-between gap-4 border-b border-[#141815] pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[.07em] text-[#59605a]">
                Core Disciplines
              </span>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-[-.05em] sm:text-4xl">
                What we deliver.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#59605a]">
              Every service is available as a dedicated fixed-scope sprint or bundled into an ongoing monthly partnership.
            </p>
          </div>

          <div className="grid gap-10">
            {serviceDetails.map((service) => (
              <article
                key={service.index}
                className={`group border border-[#141815] bg-[#f5f3ec] p-6 transition-all duration-200 sm:p-10 ${service.bgAccent}`}
              >
                <div className="grid gap-8 lg:grid-cols-[2.5rem_1fr_1.3fr_auto] lg:items-start">
                  {/* Index */}
                  <span className="text-sm font-bold text-[#141815]">
                    {service.index}
                  </span>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-[-.05em] sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-[#2463eb]">
                      {service.tagline}
                    </p>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#59605a]">
                      {service.desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-[#141815]/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <span className="text-[10px] font-bold uppercase tracking-[.07em] text-[#59605a]">
                      Deliverables &amp; Scope
                    </span>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#141815]">
                          <span className="text-[#2463eb]" aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center lg:self-center">
                    <Link
                      to="/contact"
                      className="inline-flex min-h-11 items-center gap-2 bg-[#141815] px-5 text-xs font-bold text-[#f5f3ec] transition-colors hover:bg-[#2463eb]"
                    >
                      <span>Inquire</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skyline Banner Ribbon */}
      <MoStrip />

      {/* How We Work / Process */}
      <ProcessSection />

      {/* Frequently Asked Questions */}
      <QuestionsSection />

      {/* Bottom CTA / Start a Project */}
      <InvitationSection />
    </div>
  );
};

export default Service;