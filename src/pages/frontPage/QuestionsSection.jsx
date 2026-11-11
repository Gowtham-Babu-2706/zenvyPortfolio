import React from "react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Standard brand identity and website engagements typically range between 2 to 4 weeks depending on scope, content readiness, and feature requirements.",
  },
  {
    q: "What is your pricing and engagement model?",
    a: "We offer fixed-scope project pricing with clear milestone deliverables, as well as ongoing monthly retainers for continuous social media management and web care.",
  },
  {
    q: "Do you handle hosting, domain setup, and ongoing updates?",
    a: "Yes. We configure high-performance hosting, DNS, SSL, and provide post-launch maintenance packages so your platform stays secure and fast.",
  },
  {
    q: "Can you collaborate with our existing in-house team?",
    a: "Absolutely. We often partner alongside in-house marketing teams, providing specialized web development, motion design, and branding assets where needed.",
  },
];

export const QuestionsSection = () => {
  return (
    <section className="py-22 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-12 px-5 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-14">
        <div>
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a]">Common questions</span>
          <h2 className="text-[clamp(2rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            FREQUENTLY <br />
            <em>asked.</em>
          </h2>
          <p className="mt-5 max-w-[20rem] text-base leading-[1.45] text-[#59605a]">
            Everything you need to know about starting an engagement with Zenvy Media.
          </p>
        </div>

        <div className="border-t border-[#141815]">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-[#141815] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black uppercase leading-none tracking-[-.045em] after:text-3xl after:font-normal after:text-[#2463eb] after:content-['+'] group-open:after:content-['−']">{faq.q}</summary>
              <p className="max-w-2xl pt-5 text-sm leading-relaxed text-[#59605a]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
