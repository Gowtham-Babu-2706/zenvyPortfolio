import React from "react";
import { Link } from "react-router-dom";

export const ClientProof = () => {
  return (
    <section className="border-y border-[#141815] bg-[#F6FFA4] py-22 sm:py-32" aria-labelledby="proof-title">
      <div className="mx-auto grid w-full max-w-[1512px] gap-12 px-5 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-14">
        <div>
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a]">Client words</span>
          <h2 id="proof-title" className="text-[clamp(3.4rem,7.1vw,7.4rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            IN THEIR <br />
            <em>words.</em>
          </h2>
        </div>

        <figure className="border-l-[3px] border-[#141815] pl-6">
          <blockquote className="text-[clamp(1.7rem,3vw,3.25rem)] font-medium leading-[1.1] tracking-[-.04em]">
            <p>
              We were previously sending potential partners to an outdated site built years ago.
              Zenvy refined our entire brand, built a fast, custom web experience, and brought our
              creative portfolio to life.{" "}
              <mark className="bg-transparent font-serif font-normal italic">
                It’s the first time our digital presence has truly matched the caliber of our work.
              </mark>
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm leading-relaxed">
            <strong className="block font-bold">Managing Director</strong>
            <span>Casa Digital Group</span>
            <div className="mt-3.5">
              <Link to="/work" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2463eb]">
                See our projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </figcaption>
        </figure>

        <div className="border-t border-[#141815] pt-6 text-base">
          <figure>
            <blockquote>
              <p className="max-w-md font-serif text-xl italic leading-snug">“Highly recommend. Fast turnaround and impeccable attention to typography.”</p>
            </blockquote>
            <figcaption className="mt-3 text-xs text-[#59605a]">
              <strong className="block text-[#141815]">Dan Parker</strong>
              <span>Founder, Parker &amp; Co.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
