import React from "react";
import { Link } from "react-router-dom";

export const InvitationSection = () => {
  return (
    <section className="bg-[#F6FFA4] py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1512px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14">
        <div>
          <span className="mb-5 block text-[10px] font-bold uppercase leading-none tracking-[.07em] text-[#59605a]">Start a project</span>
          <h2 className="text-[clamp(3.3rem,7vw,7.5rem)] font-black uppercase leading-[.88] tracking-[-.075em]">
            HAVE A PROJECT <br />
            <em>in mind?</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-[1.45] text-[#59605a]">
            Tell us about what you’re planning. We review inquiries quickly and provide
            an initial scope, timeline, and proposal within 24 hours.
          </p>
        </div>

        <div>
          <Link to="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#141815] px-7 py-4 text-[15px] font-bold text-[#f5f3ec] transition-colors hover:bg-[#2463eb]">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
